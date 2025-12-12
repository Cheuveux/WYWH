import {gsap} from "gsap"

const	API_KEY = '0676601509b2b365767956d89d8d68da';
const 	API_URL = 'https://api.openweathermap.org/data/2.5/weather';

let isWeatherOpen = false; // ✅ État du widget météo

export function initWeather() {
    console.log('🌤️ Initialisation de la meteo...');

    createWeatherWidget();

    const logo = document.querySelector('.logo');
    const locationLinks = document.querySelectorAll('.location');

    // ✅ ÉVÉNEMENT SUR LE LOGO : OUVRE/FERME LE WIDGET
    logo.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut
        e.stopPropagation(); // Empêche la propagation
        
        if (!isWeatherOpen) {
            // Ouvre le widget avec la météo de la carte active
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
            // Ferme le widget
            console.log('🚪 Fermeture du widget météo');
            closeWeatherWidget();
            isWeatherOpen = false;
        }
    });

    // ÉVÉNEMENT SUR LES LIENS DE LOCALISATION
    locationLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const ville = link.textContent.trim();
            console.log('🔍 Clic sur localisation:', ville);

            getMeteo(ville);
            isWeatherOpen = true; // ✅ Marque comme ouvert
        });
    });
}

function createWeatherWidget() {
    const widgetHTML = `
        <div id="weather-widget" class="weather-widget">
            <div class="weather-content">
                <div class="weather-icon" id="weather-icon">
                    <img src="" alt="weather icon" />
                </div>
                <div class="weather-temp" id="weather-temp">--°C</div>
                <div class="weather-minmax">
                    <span id="weather-min">Min: --°C</span>
                    <span id="weather-max">Max: --°C</span>
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

    // const nomVille = data.name;
    // const pays = data.sys.country;
    const temperature = Math.round(data.main.temp);
    const tempMin = Math.round(data.main.temp_min);
    const tempMax = Math.round(data.main.temp_max);
    const iconeCode = data.weather[0].icon;

    // console.log('📍 Ville:', nomVille, pays);
    // console.log('🌡️ Température:', temperature, '°C');
    console.log('📉 Min:', tempMin, '°C');
    console.log('📈 Max:', tempMax, '°C');
    console.log('🖼️ Icône:', iconeCode);

    document.getElementById('weather-temp').textContent = `${temperature}°C`;
    document.getElementById('weather-min').textContent = `${tempMin}°C`;
    document.getElementById('weather-max').textContent = `${tempMax}°C`;

    const urlIcone = `https://openweathermap.org/img/wn/${iconeCode}@2x.png`;
    document.getElementById('weather-icon').querySelector('img').src = urlIcone;

    openWeatherWidget();

    console.log('✅ Affichage terminé !');
}

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