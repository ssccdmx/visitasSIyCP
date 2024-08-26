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