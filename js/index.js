// Función para alternar el menú principal
function cambiarMenuPrincipal() {
    if (document.getElementById("header").className == "header-default") {
        document.getElementById("header").className = "header-activo";
        document.getElementById("body-contenido").className = "body-activo";
    } else {
        document.getElementById("header").className = "header-default";
        document.getElementById("body-contenido").className = "";
    }
}

document.getElementById("toggle-menu").onclick = cambiarMenuPrincipal;

// Mapa y ubicación
let map;
let marker;

function initMap() {
    map = L.map('map').setView([0, 0], 2); // Zoom inicial en 2

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
            timeout: 20000
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

    map.setView([lat, lon], 15); // Ajusta el zoom cuando se obtiene la ubicación
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
    map.setView([0, 0], 2);
}

// Asignar el valor de userAlias al campo Integrante
document.addEventListener("DOMContentLoaded", function() {
    const userAlias = document.getElementById("userAlias").textContent;
    document.getElementById("Integrante").value = userAlias;
});

document.getElementById('Status').addEventListener('change', function() {
    const otherStatusContainer = document.getElementById('other-status-container');
    if (this.value === 'Otros') {
        otherStatusContainer.innerHTML = `
            <div for="other-status" style="display:flex;margin-left:25px;padding:5px" class="label-search1">Especificar
            <input type="text" id="other-status" name="otherStatus" required></div>
        `;
    } else {
        otherStatusContainer.innerHTML = '';
    }
});

document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = true; // Desactiva el botón de envío para evitar múltiples clics

    const Status = document.getElementById('Status').value;
    const otherStatus = document.getElementById('other-status') ? document.getElementById('other-status').value : '';
    const Latitude = marker ? marker.getLatLng().lat : 0;
    const Longitude = marker ? marker.getLatLng().lng : 0;

    // Validación para evitar envío con ubicación 0, 0
    if (Latitude === 0 && Longitude === 0) {
        alert("Ubicación no válida. Asegúrate de que el mapa esté configurado correctamente.");
        submitButton.disabled = false; // Reactiva el botón si la validación falla
        return;
    }

    const data = {
        Fecha: obtenerFechaActual(),
        Integrante: getUserAlias(),
        Status: Status,
        Otros: otherStatus,
        Latitude: Latitude,
        Longitude: Longitude
    };

    try {
        const respuesta = await fetch('https://sheetdb.io/api/v1/bs9icp7wbc1qe', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (respuesta.ok) {
            window.location.href = 'registro.html'; // Redirige a la página de registro
            document.getElementById('formulario').reset(); // Restablece el formulario
        } else {
            alert('Error al enviar el formulario.');
            submitButton.disabled = false; // Reactiva el botón si ocurre un error
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Hubo un problema al enviar el formulario.');
        submitButton.disabled = false; // Reactiva el botón si ocurre un error
    }
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

// Función para obtener el alias de usuario
function getUserAlias() {
    return sessionStorage.getItem("userAlias");
}

// Función para obtener el alias de usuario de la URL
function getUserNameFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('username');
}

// Función para cargar el alias en la página de bienvenida
function loadWelcomePage() {
    var userAlias = getUserNameFromURL() || getUserAlias() || "Usuario";
    document.getElementById("userAlias").textContent = userAlias;
}

// Llama a la función loadWelcomePage al cargar la página
window.onload = loadWelcomePage;
