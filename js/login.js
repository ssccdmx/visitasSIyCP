// Datos de usuarios
var users = [
    { username: "admin", password: "1234", alias: "Administrador"},
    { username: 'MBELTRANS', password: '899498', alias: 'Beltran Santos Maria Del Carmen'},
    { username: 'JBOCANEGRAA', password: '835507', alias: 'Bocanegra Apolonio Jaime Enrique'},
    { username: 'DBUENDIAC', password: '893407', alias: 'Buendia Castro David'},
    { username: 'UCHAVARRIAA', password: '931254', alias: 'Chavarria Acosta Ulises'},
    { username: 'JCHAVEZR', password: '899477', alias: 'Chavez Ruiz Jonathan'},
    { username: 'BESCOBEDOM', password: '937257', alias: 'Escobedo Mendez Brahayan'},
    { username: 'DGARCIAC', password: '975001', alias: 'Garcia Cervantes Diana'},
    { username: 'PGARFIASS', password: '937311', alias: 'Garfias Sebastian Perla Ivonne'},
    { username: 'MGUTIERREZC', password: '1123082', alias: 'Gutierrez Cabrera Maricruz'},
    { username: 'AHERNANDEZM', password: '999720', alias: 'Hernandez Martinez Ariel'},
    { username: 'RHERNANDEZN', password: '893422', alias: 'Hernandez Nuñez Rogelio'},
    { username: 'LISLASH', password: '1003648', alias: 'Islas Hernandez Luis Daniel'},
    { username: 'KLOPEZP', password: '999679', alias: 'Lopez Paredes Karen Ivonne'},
    { username: 'JLOPEZR', password: '899488', alias: 'Lopez Ramirez Julio Cesar'},
    { username: 'TMARTINEZH', password: '895598', alias: 'Martinez Hernandez Tomas'},
    { username: 'JMARTINEZR', password: '899490', alias: 'Martinez Rosas Juan'},
    { username: 'GMIRANDAS', password: '893445', alias: 'Miranda Sanchez Giovanni'},
    { username: 'LMORALESB', password: '904614', alias: 'Morales Barron Linda Mariana'},
    { username: 'JOLIVARESC', password: '899491', alias: 'Olivares Colin Jesus David'},
    { username: 'RPEDROS', password: '893775', alias: 'Pedro Santiago Rafael'},
    { username: 'BPOSADASP', password: '904618', alias: 'Posadas Palafox Benito'},
    { username: 'GQUINTANAS', password: '904222', alias: 'Quintana Segura Geovan Eric'},
    { username: 'FRAMIREZP', password: '904625', alias: 'Ramirez Peña Francisco'},
    { username: 'FREYESM', password: '904628', alias: 'Reyes Mayorga Florentino'},
    { username: 'IROBLESR', password: '899498', alias: 'Robles Ramos Ignacio'},
    { username: 'SSANCHEZC', password: '899504', alias: 'Sanchez Cruz Saul '},
    { username: 'JSORIAL', password: '893913', alias: 'Soria Lopez Joel'},
    { username: 'AHERNANDEZH', password: '818924', alias: 'Torres Hernandez Arturo'},
    { username: 'CVAZQUEZR', password: '894210', alias: 'Vazquez Reynoso Cesar'},
    { username: 'JZITLALA', password: '899507', alias: 'Zitlal Ayala Jose Braulio'},
    { username: 'GZUGARAZOS', password: '899508', alias: 'Zugarazo Serrano Gerardo'},
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
