import {gsap} from "gsap"

const	API_KEY = '0676601509b2b365767956d89d8d68da';
const 	API_URL = 'https://api.openweathermap.org/data/2.5/weather';

let isWeatherOpen = false;

export function initWeather() {
    console.log('🌤️ Initialisation de la meteo...');

    createWeatherWidget();

    const logo = document.querySelector('.logo');

    logo.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!isWeatherOpen) {
            const activeSlide = document.querySelector('.swiper-slide-active');
            if (activeSlide) {
                const locationElement = activeSlide.querySelector('.location');
                if (locationElement) {
                    const ville = locationElement.textContent.trim();
                    console.log('📍 Ouverture météo de la carte active:', ville);
                    getMeteo(ville);
                    isWeatherOpen = true;
                } else {
                    console.warn('⚠️ Aucune localisation trouvée sur la carte active');
                }
            } else {
                console.warn('⚠️ Aucune carte active trouvée');
            }
        } else {
            console.log('🚪 Fermeture du widget météo');
            closeWeatherWidget();
            isWeatherOpen = false;
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('location')) {
            e.preventDefault();

            const ville = e.target.textContent.trim();
            console.log('🔍 Clic sur localisation:', ville);

            getMeteo(ville);
            isWeatherOpen = true;
        }
    });
}

function createWeatherWidget() {
    const widgetHTML = `
        <div id="weather-widget" class="weather-widget">
            <div class="weather-content">
                <!-- Localisation -->
                
                <!-- Calendrier -->
                <div class="weather-calendar">
                    <div class="calendar-nav">
                        <button class="calendar-prev" id="calendar-prev">&lt;</button>
                        <div class="calendar-header">
                            <span id="calendar-month-year">-- / --</span>
                        </div>
                        <button class="calendar-next" id="calendar-next">&gt;</button>
                    </div>
                    <div class="calendar-grid" id="calendar-grid">
                        <!-- Les jours seront générés ici -->
                    </div>

                <div class="weather-location" id="weather-location">--</div>
                </div>

                <!-- Météo -->
                <div class="weather-info">
                        <span id="calendar-day-name">---</span>
                    <div class="weather-icon" id="weather-icon">
                        <img src="" alt="weather icon" />
                    </div>
                    <div class="weather-minmax">
                        <span id="current-temp">°</span>
                        <span id="weather-max"></span>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
    
    console.log('✅ Widget météo créé dans le DOM');
}

function getMeteo(ville) {
    console.log('🔍 Recherche météo pour:', ville);

    const urlComplete = `${API_URL}?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`;
    console.log('📡 URL de requête:', urlComplete);

    fetch(urlComplete)
        .then(reponse => {
            console.log('✅ Réponse reçue:', reponse);
            return reponse.json();
        })
        .then(data => {
            console.log('📦 Données météo:', data);
            
            if (data.cod && data.cod != 200) {
                alert(`Ville non trouvée: ${ville}`);
                return;
            }

            afficherMeteo(data);
        })
        .catch(erreur => {
            console.error('❌ Erreur:', erreur);
            alert('Impossible de récupérer la météo pour ' + ville);
        });
}

function afficherMeteo(data) {
    console.log('🎨 Affichage des données...');

    const nomVille = data.name;
    const pays = data.sys.country;
    const temperature = Math.round(data.main.temp);
    const tempMin = Math.round(data.main.temp_min);
    const tempMax = Math.round(data.main.temp_max);
    const iconeCode = data.weather[0].icon;
    const timezone = data.timezone; // Décalage horaire en secondes

    console.log('📍 Ville:', nomVille, pays);
    console.log('🌡️ Température:', temperature, '°C');
    console.log('📉 Min:', tempMin, '°C');
    console.log('📈 Max:', tempMax, '°C');
    console.log('🖼️ Icône:', iconeCode);
    console.log('⏰ Timezone:', timezone);

    // Calcul de l'heure locale
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (timezone * 1000));

    // Affichage
    document.getElementById('weather-location').textContent = `${nomVille}, ${pays}`;
    document.getElementById('weather-max').textContent = `${tempMax}`;
    document.getElementById('current-temp').textContent = `${temperature}°`;

    const urlIcone = `https://openweathermap.org/img/wn/${iconeCode}@2x.png`;
    document.getElementById('weather-icon').querySelector('img').src = urlIcone;

    // Génère le calendrier
    generateCalendar(localTime);

    // Met à jour l'heure en temps réel
    // updateTime(timezone);

    openWeatherWidget();

    console.log('✅ Affichage terminé !');
}

// ✅ GÉNÈRE LE CALENDRIER
function generateCalendar(date) {
    const moisNoms = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const joursNoms = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

    const mois = date.getMonth();
    const annee = date.getFullYear();
    const aujourdhui = date.getDate();
    const jourSemaine = joursNoms[date.getDay() === 0 ? 6 : date.getDay() - 1]; // Lundi = 0

    // Header
    document.getElementById('calendar-month-year').textContent = `${mois + 1} / ${annee}`;
    document.getElementById('calendar-day-name').textContent = jourSemaine;

    // Grille des jours
    const premierJour = new Date(annee, mois, 1).getDay();
    const dernierJour = new Date(annee, mois + 1, 0).getDate();
    
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    // Jours vides avant le 1er
    const decalage = premierJour === 0 ? 6 : premierJour - 1; // Lundi = 0
    for (let i = 0; i < decalage; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        grid.appendChild(emptyDay);
    }

    // Jours du mois
    for (let jour = 1; jour <= dernierJour; jour++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        dayDiv.textContent = jour;

        if (jour === aujourdhui) {
            dayDiv.classList.add('today');
        }

        grid.appendChild(dayDiv);
    }
}

// ✅ MET À JOUR L'HEURE EN TEMPS RÉEL
// function updateTime(timezone) {
//     const updateClock = () => {
//         const now = new Date();
//         const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
//         const localTime = new Date(utc + (timezone * 1000));

//         const heures = localTime.getHours().toString().padStart(2, '0');
//         const minutes = localTime.getMinutes().toString().padStart(2, '0');

//         document.getElementById('current-time').textContent = `${heures}:${minutes}`;
//     };

//     updateClock();
//     setInterval(updateClock, 1000); // Met à jour chaque seconde
// }

function openWeatherWidget() {
    const widget = document.getElementById('weather-widget');
    widget.style.display = 'block';
    
    gsap.fromTo(widget, 
        {
            opacity: 0,
            y: -50,
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
        }
    );
}

function closeWeatherWidget() {
    const widget = document.getElementById('weather-widget');

    gsap.to(widget, {
        opacity: 0,
        y: -50,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            widget.style.display = 'none';
        }
    });	
}