(() => {
  'use strict';

  const script = document.currentScript;
  const measurementId = script?.dataset.measurementId || 'G-KY6MFZZ1SH';
  const guideLanguage = script?.dataset.guideLanguage || document.documentElement.lang || 'unknown';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) {
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(tag);
  }

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href
  });

  const whenReady = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      window.setTimeout(fn, 0);
    }
  };

  whenReady(() => {
    const audio = document.getElementById('audio');
    const progress = document.getElementById('progress');
    const restart = document.getElementById('restart');
    if (!audio) return;

    const rawStation = (new URLSearchParams(window.location.search).get('station') || '').replace(/\D/g, '');
    const stationId = rawStation ? rawStation.padStart(2, '0') : 'unknown';
    const stationTitle = (document.getElementById('title')?.textContent || 'Unknown station').trim();

    const baseParams = {
      guide_name: 'La Aldea Magica QR Audio Guide',
      guide_language: guideLanguage,
      station_id: stationId,
      station_number: Number(stationId) || 0,
      station_title: stationTitle
    };

    const sendEvent = (name, params = {}) => {
      window.gtag('event', name, {
        ...baseParams,
        ...params,
        transport_type: 'beacon'
      });
    };

    const rounded = (value) => Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
    const preciseSeconds = (value) => Number.isFinite(value) ? Math.max(0, Number(value.toFixed(1))) : 0;

    let startedOnce = false;
    let segmentStartedAt = null;
    let heartbeatTimer = null;
    const reachedMilestones = new Set();

    const currentPosition = () => rounded(audio.currentTime);
    const currentDuration = () => rounded(audio.duration);

    const beginListeningSegment = () => {
      if (segmentStartedAt === null) segmentStartedAt = performance.now();
      if (heartbeatTimer === null) {
        heartbeatTimer = window.setInterval(() => {
          if (!audio.paused && segmentStartedAt !== null) {
            flushListeningSegment('heartbeat');
            beginListeningSegment();
          }
        }, 15000);
      }
    };

    const stopHeartbeat = () => {
      if (heartbeatTimer !== null) {
        window.clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }
    };

    const flushListeningSegment = (reason) => {
      if (segmentStartedAt === null) return;
      const seconds = preciseSeconds((performance.now() - segmentStartedAt) / 1000);
      segmentStartedAt = null;
      if (seconds < 0.5) return;

      sendEvent('audio_listen_segment', {
        listen_seconds: seconds,
        listen_reason: reason,
        audio_position_seconds: currentPosition(),
        audio_duration_seconds: currentDuration()
      });
    };

    sendEvent('audio_guide_open');

    audio.addEventListener('loadedmetadata', () => {
      sendEvent('audio_ready', {
        audio_duration_seconds: currentDuration()
      });
    }, { once: true });

    audio.addEventListener('play', () => {
      beginListeningSegment();
      if (!startedOnce) {
        startedOnce = true;
        sendEvent('audio_start', {
          audio_position_seconds: currentPosition(),
          audio_duration_seconds: currentDuration()
        });
      } else {
        sendEvent('audio_resume', {
          audio_position_seconds: currentPosition(),
          audio_duration_seconds: currentDuration()
        });
      }
    });

    audio.addEventListener('pause', () => {
      flushListeningSegment('pause');
      stopHeartbeat();
      if (!audio.ended) {
        sendEvent('audio_pause', {
          audio_position_seconds: currentPosition(),
          audio_duration_seconds: currentDuration()
        });
      }
    });

    audio.addEventListener('timeupdate', () => {
      if (!audio.duration) return;
      const percent = (audio.currentTime / audio.duration) * 100;
      [25, 50, 75].forEach((milestone) => {
        if (percent >= milestone && !reachedMilestones.has(milestone)) {
          reachedMilestones.add(milestone);
          sendEvent('audio_progress', {
            progress_percent: milestone,
            audio_position_seconds: currentPosition(),
            audio_duration_seconds: currentDuration()
          });
        }
      });
    });

    audio.addEventListener('ended', () => {
      flushListeningSegment('complete');
      stopHeartbeat();
      sendEvent('audio_complete', {
        progress_percent: 100,
        audio_position_seconds: currentDuration(),
        audio_duration_seconds: currentDuration()
      });
    });

    audio.addEventListener('error', () => {
      flushListeningSegment('error');
      stopHeartbeat();
      sendEvent('audio_error', {
        media_error_code: audio.error?.code || 0
      });
    });

    progress?.addEventListener('change', () => {
      sendEvent('audio_seek', {
        progress_percent: rounded(Number(progress.value)),
        audio_position_seconds: currentPosition(),
        audio_duration_seconds: currentDuration()
      });
    });

    restart?.addEventListener('click', () => {
      sendEvent('audio_restart', {
        audio_duration_seconds: currentDuration()
      });
    });

    window.addEventListener('pagehide', () => {
      flushListeningSegment('page_exit');
      stopHeartbeat();
    });
  });
})();
