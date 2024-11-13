let map;
let marker;

function initMap() {
    map = L.map('map').setView([0, 0], 35); // Zoom inicial en 2

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    getLocation(); // Llama a la función para obtener la ubicación después de configurar el mapa
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, showError, {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 50000
        });
    } else {
        alert("Geolocalización no es soportada por este navegador.");
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    if (marker) {
        marker.setLatLng([lat, lon]);
    } else {
        marker = L.marker([lat, lon], { draggable: true }).addTo(map);
        marker.on('moveend', onMarkerMoveEnd);
    }

    map.setView([lat, lon], 35); // Asegúrate de que el zoom sea 2

    // Aquí puedes enviar los datos del cuestionario y la ubicación al servidor o almacenarlos
    console.log('Cuestionario:', {
        Integrante: document.getElementById('userAlias').value,
        Status: document.getElementById('Status').value,
        Latitude: lat,
        Longitude: lon
    });
}

function onMarkerMoveEnd(event) {
    const newLatLng = event.target.getLatLng();
    console.log('Nuevo marcador en:', {
        latitude: newLatLng.lat,
        longitude: newLatLng.lng
    });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Usuario denegó la solicitud de geolocalización.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La información de ubicación no está disponible.");
            break;
        case error.TIMEOUT:
            alert("La solicitud para obtener la ubicación ha caducado.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Se ha producido un error desconocido.");
            break;
    }

    // Establece la vista inicial en el zoom de 2 si ocurre un error
    map.setView([0, 0], 35);
}

document.getElementById('Status').addEventListener('change', function() {
    const otherStatusContainer = document.getElementById('other-status-container');
    if (this.value === 'Otros') {
        otherStatusContainer.innerHTML = `
                      
          <input type="text" id="other-status" name="otherStatus" style="border:none;" required></div>
        `;
    } else {
        otherStatusContainer.innerHTML = '';
    }
});

document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const Folio = document.getElementById('Folio').value;
    const Integrante = document.getElementById('userAlias').value;
    const Status = document.getElementById('Status').value;
    const otherStatus = document.getElementById('other-status') ? document.getElementById('other-status').value : '';
    const Latitude = marker ? marker.getLatLng().lat : 0;
    const Longitude = marker ? marker.getLatLng().lng : 0;

    const data = {
        Fecha: obtenerFechaActual(),
        Folio: Folio,
        Integrante: Integrante,
        Status: Status,
        Otros: otherStatus,
        Latitude: Latitude,
        Longitude: Longitude
    };

    const respuesta = await fetch('https://sheetdb.io/api/v1/bs9icp7wbc1qe', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    // Manejo de la respuesta...
});

function obtenerFechaActual() {
    const date = new Date();
    const day = agregarCeroAlPrincipio(date.getDate());
    const month = agregarCeroAlPrincipio(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = agregarCeroAlPrincipio(date.getHours());
    const minutes = agregarCeroAlPrincipio(date.getMinutes());

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function agregarCeroAlPrincipio(valor) {
    return valor < 10 ? `0${valor}` : valor;
}

// Iniciar el mapa al cargar la página
window.addEventListener('load', initMap);
