
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      let secondsToday = Math.floor((now - start) / 1000);

      function updateCounters() {
        const deaths = Math.floor(secondsToday * 1.98);
        const births = Math.floor(secondsToday * 3.9);
        const souls = Math.floor(secondsToday * 0.15);
        const jesusMentions = Math.floor(secondsToday * 0.5);

        document.getElementById('deaths').textContent = deaths.toLocaleString();
        document.getElementById('births').textContent = births.toLocaleString();
        document.getElementById('souls').textContent = souls.toLocaleString();
        document.getElementById('jesusMentions').textContent = jesusMentions.toLocaleString();
      }

      updateCounters();
      setInterval(() => {
        secondsToday++;
        updateCounters();
      }, 1000);
    