document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const FechaTurno = document.getElementById('FechaTurno').value;
    const Turno = document.getElementById('Turno').value;
    const Sede = document.getElementById('Sede').value;
    //Matutino1Balderas
    const M1_AlvarezSaldivarLucia = document.getElementById('M1_AlvarezSaldivarLucia').value;
    const M1_ArroyoSauzaDianaElizabeth = document.getElementById('M1_ArroyoSauzaDianaElizabeth').value;
    const M1_CentenoGonzalezBerenice = document.getElementById('M1_CentenoGonzalezBerenice').value;
    const M1_FloresLucianoMariaNicolasa = document.getElementById('M1_FloresLucianoMariaNicolasa').value;
    const M1_GaliciaAlvarezJessica = document.getElementById('M1_GaliciaAlvarezJessica').value;
    const M1_HernandezLucasMariElsa = document.getElementById('M1_HernandezLucasMariElsa').value;
    const M1_IslasChavezRocio = document.getElementById('M1_IslasChavezRocio').value;
    const M1_MartinezSanchezJesusCamerino = document.getElementById('M1_MartinezSanchezJesusCamerino').value;
    const M1_MoralesCastilloJesus = document.getElementById('M1_MoralesCastilloJesus').value;
    const M1_PerezBahenaElizabeth = document.getElementById('M1_PerezBahenaElizabeth').value;
    const M1_PerezCoelloDianaCarolina = document.getElementById('M1_PerezCoelloDianaCarolina').value;
    const M1_QuirozSolisVictorOmar = document.getElementById('M1_QuirozSolisVictorOmar').value;
    const M1_RamirezValdezRafael = document.getElementById('M1_RamirezValdezRafael').value;
    const M1_RoblesEspinosaAnaDenisse = document.getElementById('M1_RoblesEspinosaAnaDenisse').value;
    const M1_RojasGonzalezAngel = document.getElementById('M1_RojasGonzalezAngel').value;
    const M1_SotoHernandezElizabeth = document.getElementById('M1_SotoHernandezElizabeth').value;
    //Matutino1C5
    const M1_BravoPrietoAlejandro = document.getElementById('M1_BravoPrietoAlejandro').value;
    const M1_BarriosCruzJorgeLuis = document.getElementById('M1_BarriosCruzJorgeLuis').value;
    const M1_ContrerasVilchisCarlos = document.getElementById('M1_ContrerasVilchisCarlos').value;
    const M1_FloresHassanCarina = document.getElementById('M1_FloresHassanCarina').value;
    const M1_FloresRochaJazmin = document.getElementById('M1_FloresRochaJazmin').value;
    const M1_LimonDavalosWendi = document.getElementById('M1_LimonDavalosWendi').value;
    const M1_MarquezMayenLauraAdriana = document.getElementById('M1_MarquezMayenLauraAdriana').value;
    const M1_PerezGrimaldoCuauhtemoc = document.getElementById('M1_PerezGrimaldoCuauhtemoc').value;
    const M1_RosalioMaximilianoJaide = document.getElementById('M1_RosalioMaximilianoJaide').value;
    const M1_SanchezGonzalezMinadar = document.getElementById('M1_SanchezGonzalezMinadar').value;
    const M1_SorianoValenciaJoseOctavio = document.getElementById('M1_SorianoValenciaJoseOctavio').value;
    const M1_ValenciaJimenezAngel = document.getElementById('M1_ValenciaJimenezAngel').value;
    const M1_VelascoGonzalezFrancisco = document.getElementById('M1_VelascoGonzalezFrancisco').value;
    //Matutino2Balderas
    const M2_AguillonSerranoVictorHugo = document.getElementById('M2_AguillonSerranoVictorHugo').value;
    const M2_AlvarezLopezEnrique = document.getElementById('M2_AlvarezLopezEnrique').value;
    const M2_CuandoFriasMargaritoRoman = document.getElementById('M2_CuandoFriasMargaritoRoman').value;
    const M2_EspinosaLinaresMarioAntonio = document.getElementById('M2_EspinosaLinaresMarioAntonio').value;
    const M2_GarciaJimenezErika = document.getElementById('M2_GarciaJimenezErika').value;
    const M2_HernandezMartinezMonicaPatricia = document.getElementById('M2_HernandezMartinezMonicaPatricia').value;
    const M2_LiraCruzKathyadelCarmen = document.getElementById('M2_LiraCruzKathyadelCarmen').value;
    const M2_MonroyLozadaHugoJavier = document.getElementById('M2_MonroyLozadaHugoJavier').value;
    const M2_PachecoArevaloJoseAntonio = document.getElementById('M2_PachecoArevaloJoseAntonio').value;
    const M2_QuintanaSanchezRuben = document.getElementById('M2_QuintanaSanchezRuben').value;
    const M2_RamirezJimenezPerlaPatricia = document.getElementById('M2_RamirezJimenezPerlaPatricia').value;
    const M2_VelaGuisadoKarinaNelly = document.getElementById('M2_VelaGuisadoKarinaNelly').value;
    const M2_ZugarazoSerranoLuisGerardo = document.getElementById('M2_ZugarazoSerranoLuisGerardo').value;
    //Matutino1C5
    const M2_CandidoMorenoJuana = document.getElementById('M2_CandidoMorenoJuana').value;
    const M2_DelgadoTotoDaniel = document.getElementById('M2_DelgadoTotoDaniel').value;
    const M2_JimenezNoriegaJuanaCarolina = document.getElementById('M2_JimenezNoriegaJuanaCarolina').value;
    const M2_LopezMartinezJosefinaFabiola = document.getElementById('M2_LopezMartinezJosefinaFabiola').value;
    const M2_MonroyMartinezArizbe = document.getElementById('M2_MonroyMartinezArizbe').value;
    const M2_MoraVelascoRoberto = document.getElementById('M2_MoraVelascoRoberto').value;
    const M2_NavaSolisBernardo = document.getElementById('M2_NavaSolisBernardo').value;
    const M2_PerezPerezIsela = document.getElementById('M2_PerezPerezIsela').value;
    const M2_QuezadaBautistaOscar = document.getElementById('M2_QuezadaBautistaOscar').value;
    const M2_ReyesRosasIvan = document.getElementById('M2_ReyesRosasIvan').value;
    const M2_SalcedoHernandezElizabeth = document.getElementById('M2_SalcedoHernandezElizabeth').value;
    const M2_SandovalMoralesGabriela = document.getElementById('M2_SandovalMoralesGabriela').value;
    const M2_UribeJimenezDaniel = document.getElementById('M2_UribeJimenezDaniel').value;
    const M2_VelaGuisadoVictorHugo = document.getElementById('M2_VelaGuisadoVictorHugo').value;
    //Velada1Balderas
    const V1_BautistaHernandezAurelio = document.getElementById('V1_BautistaHernandezAurelio').value;
    const V1_ClaudisPascualFabiola = document.getElementById('V1_ClaudisPascualFabiola').value;
    const V1_CortesRamirezRoberto = document.getElementById('V1_CortesRamirezRoberto').value;
    const V1_GalindoHernandezChristianJavier = document.getElementById('V1_GalindoHernandezChristianJavier').value;
    const V1_GarciaDiazAlejandro = document.getElementById('V1_GarciaDiazAlejandro').value;
    const V1_HernandezFloresAndres = document.getElementById('V1_HernandezFloresAndres').value;
    const V1_HernandezMuñozHector = document.getElementById('V1_HernandezMuñozHector').value;
    const V1_JimenezRojasJovaniCatarino = document.getElementById('V1_JimenezRojasJovaniCatarino').value;
    const V1_MartinezLopezJorgeArmando = document.getElementById('V1_MartinezLopezJorgeArmando').value;
    const V1_NavaRoblesPaolaIsela = document.getElementById('V1_NavaRoblesPaolaIsela').value;
    //Velada1C5
    const V1_AlbaCoronaErikaYazmin = document.getElementById('V1_AlbaCoronaErikaYazmin').value;
    const V1_BaezPerezRuth = document.getElementById('V1_BaezPerezRuth').value;
    const V1_CruzLopezEmmanuel = document.getElementById('V1_CruzLopezEmmanuel').value;
    const V1_CruzSanchezIsraelIvan = document.getElementById('V1_CruzSanchezIsraelIvan').value;
    const V1_HernandezMarinIvan = document.getElementById('V1_HernandezMarinIvan').value;
    const V1_MorenoCarmonaRicardo = document.getElementById('V1_MorenoCarmonaRicardo').value;
    const V1_RodriguezHernandezMaGuadalupe = document.getElementById('V1_RodriguezHernandezMaGuadalupe').value;
    const V1_TrejoGermanMarina = document.getElementById('V1_TrejoGermanMarina').value;
    //Velada2Balderas
    const V2_ArgumedoLozanoCarlos = document.getElementById('V2_ArgumedoLozanoCarlos').value;
    const V2_ArroyoHernandezMarioAlberto = document.getElementById('V2_ArroyoHernandezMarioAlberto').value;
    const V2_BaltazarUlisesAraceli = document.getElementById('V2_BaltazarUlisesAraceli').value;
    const V2_DelgadoGarciaClaudia = document.getElementById('V2_DelgadoGarciaClaudia').value;
    const V2_GarciaMartinezJulioCesar = document.getElementById('V2_GarciaMartinezJulioCesar').value;
    const V2_InocencioMarinAlejandro = document.getElementById('V2_InocencioMarinAlejandro').value;
    const V2_RamirezBautistaJulioCesar = document.getElementById('V2_RamirezBautistaJulioCesar').value;
    const V2_RamosTrejoCarlosUlises = document.getElementById('V2_RamosTrejoCarlosUlises').value;
    const V2_TorresSantillanSunashyNayelli = document.getElementById('V2_TorresSantillanSunashyNayelli').value;
    const V2_VarelaPeñalozaAlmaVivian = document.getElementById('V2_VarelaPeñalozaAlmaVivian').value;
    //Velada2C5
    const V2_BaezLopezLauraHaidee = document.getElementById('V2_BaezLopezLauraHaidee').value;
    const V2_CruzAlejoMelvaYessenia = document.getElementById('V2_CruzAlejoMelvaYessenia').value;
    const V2_FloresMoralesEdmundo = document.getElementById('V2_FloresMoralesEdmundo').value;
    const V2_GarciaOrtizCesarArmando = document.getElementById('V2_GarciaOrtizCesarArmando').value;
    const V2_HernandezLunaAntonio = document.getElementById('V2_HernandezLunaAntonio').value;
    const V2_JaimesLopezJenniferMarisol = document.getElementById('V2_JaimesLopezJenniferMarisol').value;
    const V2_JimenezSanchezMariaDelRosario = document.getElementById('V2_JimenezSanchezMariaDelRosario').value;
    const V2_PalaciosOrdazSantaCarmen = document.getElementById('V2_PalaciosOrdazSantaCarmen').value;
    const V2_RamirezPerezJuanCarlos = document.getElementById('V2_RamirezPerezJuanCarlos').value;
    //Info adicional
    const Apoyo_1 = document.getElementById('Apoyo_1').value;
    const A1 = document.getElementById('A1').value;
    const Apoyo_2 = document.getElementById('Apoyo_2').value;
    const A2 = document.getElementById('A2').value;
    const Apoyo_3 = document.getElementById('Apoyo_3').value;
    const A3 = document.getElementById('A3').value;
    const Apoyo_4 = document.getElementById('Apoyo_4').value;
    const A4 = document.getElementById('A4').value;
    const Apoyo_5 = document.getElementById('Apoyo_5').value;
    const A5 = document.getElementById('A5').value;
    const Coordinador = document.getElementById('Coordinador').value;
    const Supervisor = document.getElementById('Supervisor').value;

  
    // Actualizar la fecha después de la validación exitosa
    document.getElementById('FechaTurno').textContent = obtenerFechaActual();

    const respuesta = await fetch('https://sheetdb.io/api/v1/wlgl2pr4jtyfa', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
            'FechaTurno': FechaTurno,
            'Turno': Turno,
            'Sede': Sede,
            'Fecha': obtenerFechaActual(),
            //Matutino1Balderas
            'M1_AlvarezSaldivarLucia': M1_AlvarezSaldivarLucia,
            'M1_ArroyoSauzaDianaElizabeth': M1_ArroyoSauzaDianaElizabeth,
            'M1_CentenoGonzalezBerenice': M1_CentenoGonzalezBerenice,
            'M1_FloresLucianoMariaNicolasa': M1_FloresLucianoMariaNicolasa,
            'M1_GaliciaAlvarezJessica': M1_GaliciaAlvarezJessica,
            'M1_HernandezLucasMariElsa': M1_HernandezLucasMariElsa,
            'M1_IslasChavezRocio': M1_IslasChavezRocio,
            'M1_MartinezSanchezJesusCamerino': M1_MartinezSanchezJesusCamerino,
            'M1_MoralesCastilloJesus': M1_MoralesCastilloJesus,
            'M1_PerezBahenaElizabeth': M1_PerezBahenaElizabeth,
            'M1_PerezCoelloDianaCarolina': M1_PerezCoelloDianaCarolina,
            'M1_QuirozSolisVictorOmar': M1_QuirozSolisVictorOmar,
            'M1_RamirezValdezRafael': M1_RamirezValdezRafael,
            'M1_RoblesEspinosaAnaDenisse': M1_RoblesEspinosaAnaDenisse,
            'M1_RojasGonzalezAngel': M1_RojasGonzalezAngel,
            'M1_SotoHernandezElizabeth': M1_SotoHernandezElizabeth,
            //Matutino1C5
            'M1_BravoPrietoAlejandro': M1_BravoPrietoAlejandro,
            'M1_BarriosCruzJorgeLuis': M1_BarriosCruzJorgeLuis,
            'M1_ContrerasVilchisCarlos': M1_ContrerasVilchisCarlos,
            'M1_FloresHassanCarina': M1_FloresHassanCarina,
            'M1_FloresRochaJazmin': M1_FloresRochaJazmin,
            'M1_LimonDavalosWendi': M1_LimonDavalosWendi,
            'M1_MarquezMayenLauraAdriana': M1_MarquezMayenLauraAdriana,
            'M1_PerezGrimaldoCuauhtemoc': M1_PerezGrimaldoCuauhtemoc,
            'M1_RosalioMaximilianoJaide': M1_RosalioMaximilianoJaide,
            'M1_SanchezGonzalezMinadar': M1_SanchezGonzalezMinadar,
            'M1_SorianoValenciaJoseOctavio': M1_SorianoValenciaJoseOctavio,
            'M1_ValenciaJimenezAngel': M1_ValenciaJimenezAngel,
            'M1_VelascoGonzalezFrancisco': M1_VelascoGonzalezFrancisco,
            //Matutino2Balderas
            'M2_AguillonSerranoVictorHugo': M2_AguillonSerranoVictorHugo,
            'M2_AlvarezLopezEnrique': M2_AlvarezLopezEnrique,
            'M2_CuandoFriasMargaritoRoman': M2_CuandoFriasMargaritoRoman,
            'M2_EspinosaLinaresMarioAntonio': M2_EspinosaLinaresMarioAntonio,
            'M2_GarciaJimenezErika': M2_GarciaJimenezErika,
            'M2_HernandezMartinezMonicaPatricia': M2_HernandezMartinezMonicaPatricia,
            'M2_LiraCruzKathyadelCarmen': M2_LiraCruzKathyadelCarmen,
            'M2_MonroyLozadaHugoJavier': M2_MonroyLozadaHugoJavier,
            'M2_PachecoArevaloJoseAntonio': M2_PachecoArevaloJoseAntonio,
            'M2_QuintanaSanchezRuben': M2_QuintanaSanchezRuben,
            'M2_RamirezJimenezPerlaPatricia': M2_RamirezJimenezPerlaPatricia,
            'M2_VelaGuisadoKarinaNelly': M2_VelaGuisadoKarinaNelly,
            'M2_ZugarazoSerranoLuisGerardo': M2_ZugarazoSerranoLuisGerardo,
            //Matutino2C5
            'M2_CandidoMorenoJuana': M2_CandidoMorenoJuana,
            'M2_DelgadoTotoDaniel': M2_DelgadoTotoDaniel,
            'M2_JimenezNoriegaJuanaCarolina': M2_JimenezNoriegaJuanaCarolina,
            'M2_LopezMartinezJosefinaFabiola': M2_LopezMartinezJosefinaFabiola,
            'M2_MonroyMartinezArizbe': M2_MonroyMartinezArizbe,
            'M2_MoraVelascoRoberto': M2_MoraVelascoRoberto,
            'M2_NavaSolisBernardo': M2_NavaSolisBernardo,
            'M2_PerezPerezIsela': M2_PerezPerezIsela,
            'M2_QuezadaBautistaOscar': M2_QuezadaBautistaOscar,
            'M2_ReyesRosasIvan': M2_ReyesRosasIvan,
            'M2_SalcedoHernandezElizabeth': M2_SalcedoHernandezElizabeth,
            'M2_SandovalMoralesGabriela': M2_SandovalMoralesGabriela,
            'M2_UribeJimenezDaniel': M2_UribeJimenezDaniel,
            'M2_VelaGuisadoVictorHugo': M2_VelaGuisadoVictorHugo,
            //Velada1Balderas
            'V1_BautistaHernandezAurelio': V1_BautistaHernandezAurelio,
            'V1_ClaudisPascualFabiola': V1_ClaudisPascualFabiola,
            'V1_CortesRamirezRoberto': V1_CortesRamirezRoberto,
            'V1_GalindoHernandezChristianJavier': V1_GalindoHernandezChristianJavier,
            'V1_GarciaDiazAlejandro': V1_GarciaDiazAlejandro,
            'V1_HernandezFloresAndres': V1_HernandezFloresAndres,
            'V1_HernandezMuñozHector': V1_HernandezMuñozHector,
            'V1_JimenezRojasJovaniCatarino': V1_JimenezRojasJovaniCatarino,
            'V1_MartinezLopezJorgeArmando': V1_MartinezLopezJorgeArmando,
            'V1_NavaRoblesPaolaIsela': V1_NavaRoblesPaolaIsela,
            //Velada1C5
            'V1_AlbaCoronaErikaYazmin': V1_AlbaCoronaErikaYazmin,
            'V1_BaezPerezRuth': V1_BaezPerezRuth,
            'V1_CruzLopezEmmanuel': V1_CruzLopezEmmanuel,
            'V1_CruzSanchezIsraelIvan': V1_CruzSanchezIsraelIvan,
            'V1_HernandezMarinIvan': V1_HernandezMarinIvan,
            'V1_MorenoCarmonaRicardo': V1_MorenoCarmonaRicardo,
            'V1_RodriguezHernandezMaGuadalupe': V1_RodriguezHernandezMaGuadalupe,
            'V1_TrejoGermanMarina': V1_TrejoGermanMarina,
            //Velada2Balderas
            'V2_ArgumedoLozanoCarlos': V2_ArgumedoLozanoCarlos,
            'V2_ArroyoHernandezMarioAlberto': V2_ArroyoHernandezMarioAlberto,
            'V2_BaltazarUlisesAraceli': V2_BaltazarUlisesAraceli,
            'V2_DelgadoGarciaClaudia': V2_DelgadoGarciaClaudia,
            'V2_GarciaMartinezJulioCesar': V2_GarciaMartinezJulioCesar,
            'V2_InocencioMarinAlejandro': V2_InocencioMarinAlejandro,
            'V2_RamirezBautistaJulioCesar': V2_RamirezBautistaJulioCesar,
            'V2_RamosTrejoCarlosUlises': V2_RamosTrejoCarlosUlises,
            'V2_TorresSantillanSunashyNayelli': V2_TorresSantillanSunashyNayelli,
            'V2_VarelaPeñalozaAlmaVivian': V2_VarelaPeñalozaAlmaVivian,
            //Velada2C5
            'V2_BaezLopezLauraHaidee': V2_BaezLopezLauraHaidee,
            'V2_CruzAlejoMelvaYessenia': V2_CruzAlejoMelvaYessenia,
            'V2_FloresMoralesEdmundo': V2_FloresMoralesEdmundo,
            'V2_GarciaOrtizCesarArmando': V2_GarciaOrtizCesarArmando,
            'V2_HernandezLunaAntonio': V2_HernandezLunaAntonio,
            'V2_JaimesLopezJenniferMarisol': V2_JaimesLopezJenniferMarisol,
            'V2_JimenezSanchezMariaDelRosario': V2_JimenezSanchezMariaDelRosario,
            'V2_PalaciosOrdazSantaCarmen': V2_PalaciosOrdazSantaCarmen,
            'V2_RamirezPerezJuanCarlos': V2_RamirezPerezJuanCarlos,
            //Info complementaria
            'Apoyo_1': Apoyo_1,
            'A1': A1,
            'Apoyo_2': Apoyo_2,
            'A2': A2,
            'Apoyo_3': Apoyo_3,
            'A3': A3,
            'Apoyo_4': Apoyo_4,
            'A4': A4,
            'Apoyo_5': Apoyo_5,
            'A5': A5,
            'Supervisor': Supervisor,
            'Coordinador': Coordinador

        })
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

    // Formatear la fecha como "DD/MM/AAAA HH:MM"
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}


function agregarCeroAlPrincipio(valor) {
    // Agrega un cero al principio si el valor es un solo dígito
    return valor < 10 ? `0${valor}` : valor;
}


// Mostrar la fecha actual en la consola (puedes adaptarlo según tus necesidades)
console.log(obtenerFechaActual());



