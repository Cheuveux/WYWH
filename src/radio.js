import { gsap } from "gsap";

export function intializeRadio() {
    const player = document.getElementById('radio-player');
    const toggleBtn = document.getElementById('radio-toggle');
    const customPlayer = document.getElementById('custom-player');
    const trackTitle = document.getElementById('track-title');
    const musicArtist = document.getElementById('music-artist');
    const timeCurrent = document.getElementById('time-current');
    const timeTotal = document.getElementById('time-total');
    const playBtn = document.getElementById('play-pause');

    // ✅ RÉCUPÈRE LES PISTES DEPUIS .music-item (si elles existent)
    let tracks = getTracksFromPlaylist();
    
    // ✅ FALLBACK : Si pas de .music-item, utilise les pistes par défaut
    if (tracks.length === 0) {
        tracks = [
            'audio/Give_me_your_hand.mp3',
            'audio/Swimming_pool.mp3',
            'audio/Pressure.mp3'
        ];
    }

    // ✅ SHUFFLE les pistes au chargement
    tracks = shuffleArray(tracks);

    let current = 0;
    let isPlaying = false;
    let isVisible = false;

    function emit(name, detail = {}) {
        window.dispatchEvent(new CustomEvent(name, { detail }));
    }

    // ✅ RÉCUPÈRE TOUTES LES PISTES DEPUIS LE DOM
    function getTracksFromPlaylist() {
        const items = document.querySelectorAll('.music-item[data-audio]');
        return Array.from(items).map(item => item.getAttribute('data-audio')).filter(Boolean);
    }

    // ✅ SHUFFLE ARRAY (algorithme Fisher-Yates)
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function updateTrackTitle() {
        const active = document.querySelector('.music-item.active');
        if (active) {
            const title = active.querySelector('.music-title h1')?.textContent?.trim() || '';
            const artist = active.querySelector('.music-artist')?.textContent?.trim() || '';
            if (trackTitle) trackTitle.textContent = title;
            if (musicArtist) musicArtist.textContent = artist;
        } else {
            // ✅ CHERCHE L'ITEM CORRESPONDANT À LA SOURCE ACTUELLE
            const currentSrc = player?.src;
            if (currentSrc) {
                const matchingItem = document.querySelector(`.music-item[data-audio="${currentSrc}"]`);
                if (matchingItem) {
                    const title = matchingItem.querySelector('.music-title h1')?.textContent?.trim() || '';
                    const artist = matchingItem.querySelector('.music-artist')?.textContent?.trim() || '';
                    if (trackTitle) trackTitle.textContent = title;
                    if (musicArtist) musicArtist.textContent = artist;
                    return;
                }
            }

            // Fallback : affiche le nom du fichier
            const path = tracks[current] || '';
            const fileName = decodeURIComponent(path.split('/').pop() || '');
            if (trackTitle) trackTitle.textContent = fileName.replace(/\.[^/.]+$/, "");
            if (musicArtist) musicArtist.textContent = '';
        }
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
    }

    function showPlayer() {
        if (!customPlayer || !toggleBtn) return;
        isVisible = true;
        toggleBtn.classList.add('active');
        customPlayer.style.display = 'flex';
        gsap.fromTo(customPlayer, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
        emit('radio:visible', { visible: true, src: player?.src });
    }

    function hidePlayer() {
        if (!customPlayer || !toggleBtn) return;
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
        showPlayer();
        updateTrackTitle();
        player.play();
    }

    function playIndex(i) {
        if (!player) return;
        if (i < 0 || i >= tracks.length) return;
        current = i;
        player.src = tracks[current];
        showPlayer();
        player.play();
        updateTrackTitle();
    }

    function setTracks(newTracks) {
        if (!Array.isArray(newTracks)) return;
        tracks = newTracks.slice();
        current = 0;
        if (player) player.src = tracks[0] || '';
        updateTrackTitle();
    }

    function getState() {
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
            if (!player.paused) {
                emit('radio:hide-request', { src: resolved });
                player.pause();
                hidePlayer();
                emit('radio:stopped', { src: resolved });
            } else {
                emit('radio:show-request', { src: resolved });
                showPlayer();
                player.play();
            }
            return;
        }

        emit('radio:show-request', { src: resolved });

        const idx = tracks.indexOf(url);
        if (idx !== -1) current = idx; else { tracks.unshift(url); current = 0; }
        player.src = tracks[current];
        showPlayer();
        player.play();
        updateTrackTitle();
    }

    // ✅ FONCTION POUR RE-SHUFFLE
    function reshuffleTracks() {
        tracks = shuffleArray(tracks);
        current = 0;
        if (player) player.src = tracks[current];
        updateTrackTitle();
        console.log('🔀 Pistes mélangées:', tracks);
    }

    return { playUrl, playIndex, setTracks, getState, toggleUrl, reshuffleTracks };
}
