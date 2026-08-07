(() => {
  'use strict';
  const audio = document.getElementById('audio');
  const play = document.getElementById('play');
  const progress = document.getElementById('progress');
  const current = document.getElementById('current');
  const duration = document.getElementById('duration');
  const status = document.getElementById('status');
  const restart = document.getElementById('restart');

  const time = (seconds) => Number.isFinite(seconds)
    ? `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`
    : '0:00';

  const setState = (playing) => {
    play.textContent = playing ? '❚❚' : '▶';
    play.setAttribute('aria-label', playing ? 'Pausar audio' : 'Reproducir audio');
  };

  play.addEventListener('click', async () => {
    try {
      audio.paused ? await audio.play() : audio.pause();
    } catch (error) {
      status.textContent = 'No pudimos iniciar el audio. Intentá nuevamente.';
    }
  });

  restart.addEventListener('click', async () => {
    audio.currentTime = 0;
    try { await audio.play(); }
    catch (error) { status.textContent = 'No pudimos iniciar el audio. Intentá nuevamente.'; }
  });

  audio.addEventListener('play', () => { setState(true); status.textContent = ''; });
  audio.addEventListener('pause', () => setState(false));
  audio.addEventListener('loadedmetadata', () => { duration.textContent = time(audio.duration); });
  audio.addEventListener('timeupdate', () => {
    const played = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    progress.value = played;
    progress.style.setProperty('--played', `${played}%`);
    current.textContent = time(audio.currentTime);
  });
  progress.addEventListener('input', () => {
    if (audio.duration) audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    progress.style.setProperty('--played', `${progress.value}%`);
  });
  audio.addEventListener('ended', () => {
    setState(false);
    audio.currentTime = 0;
    status.textContent = '¡Misión completada! Volvé al recorrido y buscá el próximo código QR.';
  });
  audio.addEventListener('error', () => {
    status.textContent = 'Este audio no está disponible en este momento.';
    play.disabled = true;
  });
})();
