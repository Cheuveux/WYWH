

export function intializeRadio() {
    const player = document.getElementById('radio-player');
    const toggleBtn = document.getElementById('radio-toggle');
    const customPlayer = document.getElementById('custom-player');
    const progressBar = document.getElementById('progress');
    const trackTitle = document.getElementById('track-title');
    const timeCurrent = document.getElementById('time-current');
    const timeTotal = document.getElementById('time-total');
    const playBtn = document.getElementById('play-pause');

    let tracks = [ 'audio/Give_me_your_hand.mp3', 'audio/Swimming_pool.mp3', 'audio/Pressure.mp3' ];
    let current = 0;
    let isPlaying = false;
    let isVisible = false;

    function emit(name, detail = {}) {
      window.dispatchEvent(new CustomEvent(name, { detail }));
    }

    function updateTrackTitle() {
      const path = tracks[current] || '';
      const fileName = path.split('/').pop() || '';
      if (trackTitle) trackTitle.textContent = fileName.replace(/\.[^/.]+$/, "");
    }

    if (tracks.length && player) player.src = tracks[current];
    updateTrackTitle();

    // sync audio events -> état + events
    if (player) {
      player.addEventListener('play', () => {
        isPlaying = true;
        emit('radio:play', { src: player.src });
      });
      player.addEventListener('pause', () => {
        isPlaying = false;
        emit('radio:pause', { src: player.src });
      });
      player.addEventListener('ended', () => {
        current = (current + 1) % tracks.length;
        player.src = tracks[current];
        updateTrackTitle();
        player.play();
      });
      player.addEventListener('timeupdate', () => {
        if (player.duration && progressBar) {
          const percent = (player.currentTime / player.duration) * 100;
          progressBar.value = percent;
          if (timeCurrent) timeCurrent.textContent = formatTime(player.currentTime);
          if (timeTotal) timeTotal.textContent = formatTime(player.duration);
        }
      });
    }

    function formatTime(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
      return `${min}:${sec}`;
    }

    if (progressBar && player) {
      progressBar.addEventListener('input', () => {
        if (player.duration) player.currentTime = (progressBar.value / 100) * player.duration;
      });
    }

    function showPlayer() {
      if (!customPlayer || !toggleBtn) return;
      // mettre l'état immédiatement pour que l'UI sache
      isVisible = true;
      toggleBtn.classList.add('active');
      customPlayer.style.display = 'flex';
      gsap.fromTo(customPlayer, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
      emit('radio:visible', { visible: true, src: player?.src });
    }

    function hidePlayer() {
      if (!customPlayer || !toggleBtn) return;
      // mettre l'état immédiatement
      isVisible = false;
      toggleBtn.classList.remove('active');
      gsap.to(customPlayer, {
        opacity: 0, scale: 0.8, duration: 0.25, ease: "power2.in",
        onComplete: () => { customPlayer.style.display = 'none'; }
      });
      emit('radio:visible', { visible: false, src: player?.src });
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        if (!isVisible) { showPlayer(); player?.play(); } else { hidePlayer(); player?.pause(); }
      });
    }

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (!isPlaying) { player?.play(); showPlayer(); } else { player?.pause(); }
      });
    }

    function playUrl(url) {
      if (!url || !player) return;
      const idx = tracks.indexOf(url);
      if (idx !== -1) current = idx;
      else { tracks.unshift(url); current = 0; }
      player.src = tracks[current];
      updateTrackTitle();
      showPlayer();
      player.play();
    }

    function playIndex(i) {
      if (!player) return;
      if (i < 0 || i >= tracks.length) return;
      current = i;
      player.src = tracks[current];
      updateTrackTitle();
      showPlayer();
      player.play();
    }

    function setTracks(newTracks) {
      if (!Array.isArray(newTracks)) return;
      tracks = newTracks.slice();
      current = 0;
      if (player) player.src = tracks[0] || '';
      updateTrackTitle();
    }

    function getState() { 
      // derive state directly depuis le <audio> pour éviter les désynchronisations
      const playerSrc = player ? (player.src ? new URL(player.src, location.href).href : '') : '';
      return { 
        current, 
        isPlaying: !!player && !player.paused, 
        isVisible, 
        tracks: tracks.slice(),
        src: playerSrc
      }; 
    }

    function toggleUrl(url) {
      if (!url || !player) return;
      const resolved = new URL(url, location.href).href;
      const currentSrc = player.src ? new URL(player.src, location.href).href : '';

      if (currentSrc === resolved) {
        // même piste : se baser sur player.paused (état réel)
        if (!player.paused) {
          // émettre un event immédiat pour que l'UI masque la visualisation sans attendre l'animation
          emit('radio:hide-request', { src: resolved });

          // arrêter la lecture et masquer le player
          player.pause();
          hidePlayer();

          // émettre pause/stop (player.pause() déclenchera aussi 'radio:pause' via l'écouteur)
          emit('radio:stopped', { src: resolved });
        } else {
          // demander l'affichage immédiat avant play
          emit('radio:show-request', { src: resolved });

          showPlayer();
          player.play();
          // 'play' event sera émis par l'écouteur du player
        }
        return;
      }

      // piste différente → jouer la nouvelle
      emit('radio:show-request', { src: resolved });

      const idx = tracks.indexOf(url);
      if (idx !== -1) current = idx; else { tracks.unshift(url); current = 0; }
      player.src = tracks[current];
      updateTrackTitle();
      showPlayer();
      player.play();
    }

    return { playUrl, playIndex, setTracks, getState, toggleUrl };
}
