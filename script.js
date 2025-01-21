
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("Service Worker registrován."))
      .catch((error) => console.error("Registrace Service Worker selhala:", error));
  }
  