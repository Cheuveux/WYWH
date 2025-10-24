import { gsap } from "gsap";

export  function intializeRadio()
{
    const   player = document.getElementById('radio-player');
    const   toggleBtn = document.getElementById('radio-toggle');
    const   customPlayer =  document.getElementById('custom-player');
    const   progressBar = document.getElementById('progress');
    const   trackTitle = document.getElementById('track-title');
    const   timeCurrent = document.getElementById('time-current');
    const   timeTotal = document.getElementById('time-total');
    const   playBtn = document.getElementById('play-pause');

    // tracks peut être remplacé via l'API
    let tracks = [
        'audio/Give_me_your_hand.mp3',
        'audio/Swimming_pool.mp3',
        'audio/Pressure.mp3',
    ];

    let current = 0;
    let isPlaying = false;
    let isVisible = false;

    function updateTrackTitle() {
        const path = tracks[current] || '';
        const fileName = path.split('/').pop() || '';
        trackTitle.textContent = fileName.replace(/\.[^/.]+$/, "");
    }

    // initial source
    if (tracks.length) {
      player.src = tracks[current];
    }
    updateTrackTitle();

    player.addEventListener('ended', () =>{
        current = (current + 1) % tracks.length;
        player.src = tracks[current];
        updateTrackTitle();
        player.play();
    });

    function formatTime(seconds){
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
         return `${min}:${sec}`;
    }

    player.addEventListener('timeupdate', () => {
        if(player.duration)
        {
            const percent = (player.currentTime / player.duration) * 100;
            progressBar.value = percent;

            timeCurrent.textContent = formatTime(player.currentTime);
            timeTotal.textContent = formatTime(player.duration);
        }
    });

    // corrige : appliquer la nouvelle position au player
    progressBar.addEventListener('input', () => {
        if(player.duration)
        {
            const currentTime = (progressBar.value / 100) * player.duration;
            player.currentTime = currentTime;
        }
    });

    // helper pour afficher le player
    function showPlayer() {
      if (!isVisible) {
        customPlayer.style.display = 'flex';
        gsap.fromTo(customPlayer,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
            onComplete: () => {
              isVisible = true;
              toggleBtn.classList.add('active');
            }
          }
        );
      }
    }

    function hidePlayer() {
      if (isVisible) {
        gsap.to(customPlayer, {
          opacity: 0,
          scale: 0.8,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            customPlayer.style.display = 'none';
            isVisible = false;
            toggleBtn.classList.remove('active');
          }
        });
      }
    }

    // display toggle (conserve ton comportement)
    toggleBtn.addEventListener('click', () => {
      if (!isVisible) {
        showPlayer();
        player.play();
        isPlaying = true;
        playBtn.classList.add('active');
      } else {
        hidePlayer();
        player.pause();
        isPlaying = false;
        playBtn.classList.remove('active');
      }
    });

    playBtn.addEventListener('click', () => {
      if (!isPlaying) {
        player.play();
        isPlaying = true;
        playBtn.classList.add('active');
        showPlayer();
      } else {
        player.pause();
        isPlaying = false;
        playBtn.classList.remove('active');
      }
    });

    // API exposée pour contrôler la radio depuis d'autres modules
    function playUrl(url) {
      if (!url) return;
      // si c'est une url qui existe dans la playlist, utiliser son index
      const idx = tracks.indexOf(url);
      if (idx !== -1) {
        current = idx;
      } else {
        // ajouter temporairement en tête et l'utiliser
        tracks.unshift(url);
        current = 0;
      }
      player.src = tracks[current];
      updateTrackTitle();
      showPlayer();
      player.play();
      isPlaying = true;
      playBtn.classList.add('active');
    }

    function playIndex(i) {
      if (i < 0 || i >= tracks.length) return;
      current = i;
      player.src = tracks[current];
      updateTrackTitle();
      showPlayer();
      player.play();
      isPlaying = true;
      playBtn.classList.add('active');
    }

    function setTracks(newTracks) {
      if (!Array.isArray(newTracks)) return;
      tracks = newTracks.slice();
      current = 0;
      player.src = tracks[0] || '';
      updateTrackTitle();
    }

    function getState() {
      return { current, isPlaying, isVisible, tracks: tracks.slice() };
    }

    // retourne l'API
    return {
      playUrl,
      playIndex,
      setTracks,
      getState
    };
}