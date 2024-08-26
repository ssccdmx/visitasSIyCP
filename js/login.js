// Datos de usuarios
var users = [
    { username: "admin", password: "1234", alias: "Administrador"},
    { username: "M1", password: "Matutino", alias: "Coordinador@ Matutino 1"},
    { username: "M2", password: "Matutino", alias: "Coordinador@ Matutino 2"},
    { username: "V1", password: "Velada", alias: "Coordinador@ Velada 1"},
    { username: "V2", password: "Velada", alias: "Coordinador@ Velada 2"},
];

// Función para verificar el login
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            // Si el login es correcto, guarda el alias en sessionStorage
            sessionStorage.setItem("userAlias", users[i].alias);
            // Redirecciona a la página de bienvenida
            window.location.href = "docs/formulario.html";
            return;
        }
    }
    alert("Usuario o contraseña incorrectos");
}

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
