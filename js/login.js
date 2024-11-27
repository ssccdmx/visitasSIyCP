// Datos de usuarios
var users = [
    { username: "admin", password: "1234", alias: "Administrador"},
    //Matutino 1
    { username: 'JALVARADOL', password: '825287', alias: 'Alvarado Lomeli Jorge'},
    { username: 'MALVAREZR', password: '893399', alias: 'Alvarez Rodriguez Marco Antonio'},
    { username: 'ABRAVOP', password: '851158', alias: 'Bravo Prieto Alejandro'},
    { username: 'RCABRERAA', password: '893404', alias: 'Cabrera Alcala Rosalba'},
    { username: 'JCARREÑOM', password: '899471', alias: 'Carreño Martinez Jorge Uriel'},
    { username: 'MCASTROG', password: '904603', alias: 'Castro Gomez Mariano'},
    { username: 'GCUEVASL', password: '899476', alias: 'Cuevas Lozada Guillermo'},
    { username: 'ACRUZV', password: '975178', alias: 'De La Cruz Villegas Alma Lorena'},
    { username: 'TFIGUEROAS', password: '904610', alias: 'Figueroa Sanchez Tonancy'},
    { username: 'EGARDUÑOM', password: '999697', alias: 'Garduño Mejia Ernesto Giovanni'},
    { username: 'CGONZALEZA', password: '1001088', alias: 'Gonzalez Aparicio Carlos'},
    { username: 'SGONZALEZF', password: '975012', alias: 'Gonzalez Fuentes Sergio Elias'},
    { username: 'GHERNANDEZC', password: '893421', alias: 'Hernandez Cervantes Gabriela'},
    { username: 'HHERNANDEZS', password: '904627', alias: 'Hernandez Sandoval Horacio'},
    { username: 'SJIMENEZS', password: '851378', alias: 'Jimenez Sanchez Salvador'},
    { username: 'SLINARESH', password: '899486', alias: 'Linares Hernandez Silvestre'},
    { username: 'JLOPEZZ', password: '893440', alias: 'Lopez Zepeda Juan Gerardo'},
    { username: 'FLUNAM', password: '817220', alias: 'Luna Macedo Francisco Daniel'},
    { username: 'JMARTINEZC', password: '753222', alias: 'Martinez Contreras Juan Francisco'},
    { username: 'LMONTIELT', password: '893446', alias: 'Montiel Torres Luis Manuel'},
    { username: 'EMORALESL', password: '1007207', alias: 'Morales Lopez Erik De Jesus '},
    { username: 'GMORALESM', password: '931260', alias: 'Morales Miranda German'},
    { username: 'JPEREZE', password: '893851', alias: 'Perez Elias Jose Roberto'},
    { username: 'OPEREZO', password: '893453', alias: 'Perez Olvera Omar Levi'},
    { username: 'SPOBLANOG', password: '893455', alias: 'Poblano Gabriel Sadot Eleuterio'},
    { username: 'PQUINTANAP', password: '899492', alias: 'Quintanar Parra Guadalupe Karina'},
    { username: 'JQUIROZO', password: '828667', alias: 'Quiroz Olivares Javier'},
    { username: 'LRAMIREZG', password: '899494', alias: 'Ramirez Garcia Luis Antonio'},
    //Matutino 2
    { username: 'CARIASH', password: '904597', alias: 'Arias Hernandez Christopher Philip'},
    { username: 'MBELTRANS', password: '893405', alias: 'Beltran Santos Maria Del Carmen'},
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
    { username: 'YVAZQUEZF', password: '913650', alias: 'Vazquez Fuentes Yahira Geenevieve'},
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
            // Guardar sesión
            localStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem("userAlias", users[i].alias);
            // Redirigir al formulario
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

// Función para cargar el alias en la página de bienvenida
function loadWelcomePage() {
    var userAlias = getUserNameFromURL() || getUserAlias() || "Usuario";
    document.getElementById("userAlias").textContent = userAlias;
}

// Llama a la función loadWelcomePage al cargar la página
window.onload = loadWelcomePage;
