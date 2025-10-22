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

    const tracks = [
        'audio/Give_me_your_hand.mp3',
        'audio/Swimming_pool.mp3',
        'audio/Pressure.mp3',
    ]


    let current = 0;
    let isPlaying = false;
    let isVisible = false;

    function    updateTrackTitle() {
        const path = tracks[current];
        const fileName = path.split('/').pop();
        trackTitle.textContent = fileName.replace(/\.[^/.]+$/, "");
    }
    player.src = tracks[current];
    updateTrackTitle();

    //passage automatique au son suivant
    player.addEventListener('ended', () =>{
        current = (current + 1) % tracks.length;
        player.src = tracks[current];
        updateTrackTitle();
        player.play();
    });

    //formattage du temps
    function    formatTime(seconds){
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
         return `${min}:${sec}`;
    }
    //MAJ de la barre de progression
    player.addEventListener('timeupdate', () => {
        if(player.duration)
        {
            const percent = (player.currentTime / player.duration) * 100;
            progressBar.value = percent;

            timeCurrent.textContent = formatTime(player.currentTime);
            timeTotal.textContent = formatTime(player.duration);
        }
    });

    //Changer la position sur la barre
    progressBar.addEventListener('input', () => {
        if(player.duration)
        {
            const currentTime = (progressBar.value / 100) *player.duration;
        }
    });
    
    //display de la radio par le toggle
    toggleBtn.addEventListener('click', () => {
        if (!isVisible) {
            // Afficher le player
            customPlayer.style.display = 'flex';
            player.play();
            gsap.fromTo(customPlayer,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        isVisible = true;
                        toggleBtn.classList.add('active');
                        playBtn.classList.toggle('active', isPlaying);
                    }
                }
                
            );
        } else {
            // Masquer le player
            player.pause();
            gsap.to(customPlayer, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                ease: "power2.in",
                onComplete: () => {
                    customPlayer.style.display = 'none';
                    isVisible = false;
                    toggleBtn.classList.remove('active');
                    playBtn.classList.remove('active');
                }
            });
            // Pause la radio si elle joue
            if (isPlaying) {
                player.pause();
                isPlaying = false;
            }
        }
    });

    // Bouton play/pause actif
    playBtn.addEventListener('click', () => {
        if (!isPlaying) {
            player.play();
            isPlaying = true;
            playBtn.classList.add('active');
            toggleBtn.classList.add('active');
            if (!isVisible) {
                customPlayer.style.display = 'flex';
                gsap.fromTo(customPlayer,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: () => {
                            isVisible = true;
                        }
                    }
                );
            }
        } else {
            player.pause();
            isPlaying = false;
            playBtn.classList.remove('active');
            toggleBtn.classList.remove('active');
            if (isVisible) {
                gsap.to(customPlayer, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: () => {
                        customPlayer.style.display = 'none';
                        isVisible = false;
                    }
                });
            }
        }
    });
}