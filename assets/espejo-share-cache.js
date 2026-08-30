(() => {
  const freshShareUrl = "https://lacasadelduende.art/espejo-del-duende.html?wa=3";

  try {
    if (typeof navigator.share === "function") {
      const nativeShare = navigator.share.bind(navigator);
      const wrappedShare = (data = {}) => nativeShare({...data, url:freshShareUrl});
      try {
        Object.defineProperty(navigator,"share",{configurable:true,value:wrappedShare});
      } catch (_) {
        try { navigator.share = wrappedShare; } catch (_) {}
      }
    }
  } catch (_) {}

  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      const nativeWrite = navigator.clipboard.writeText.bind(navigator.clipboard);
      const wrappedWrite = (text) => nativeWrite(String(text).replace("?wa=2","?wa=3"));
      try {
        Object.defineProperty(navigator.clipboard,"writeText",{configurable:true,value:wrappedWrite});
      } catch (_) {}
    }
  } catch (_) {}
})();