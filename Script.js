
    const progress = document.getElementById("progress");
    const song = document.getElementById("song");
    const ctIcon = document.getElementById("ctIcon");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    song.addEventListener('loadedmetadata', function() {
      progress.max = song.duration;
      durationEl.textContent = formatTime(song.duration);
    });

    song.addEventListener('timeupdate', function() {
      progress.value = song.currentTime;
      currentTimeEl.textContent = formatTime(song.currentTime);
    });

    function playPause() {
      if (ctIcon.classList.contains("fa-pause")) {
        song.pause();
        ctIcon.classList.remove("fa-pause");
        ctIcon.classList.add("fa-play");
      } else {
        song.play();
        ctIcon.classList.add("fa-pause");
        ctIcon.classList.remove("fa-play");
      }
    }

    progress.onchange = function() {
      song.currentTime = progress.value;
      if (song.paused) {
        playPause();
      }
    }

    function skipBackward() {
      song.currentTime -= 10;
    }

    function skipForward() {
      song.currentTime += 10;
    }
 