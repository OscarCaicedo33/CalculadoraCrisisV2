/*=============== Usamos la función para esucuchar la entrada del usuario cuando usa [botón de calcular] ===============*/

    document.querySelector('.login__button').addEventListener('click', function(e) {
    e.preventDefault();
/*=============== Creamos variables asociadas a cada campo para leer estos datos ===============*/

    var temaSensible = document.querySelector('#tema-sensible').value;
    var mencionaMarca = document.querySelector('#menciona-marca').value;
    var alcance = parseInt(document.querySelector('#alcance').value); // ParseInt aquí
    var engagement = parseInt(document.querySelector('#engagement').value); // ParseInt aquí
    let nivelRiesgo;
//*=============== Guardamos los constantes que van a ser comparables  ===============*/        

    if (alcance <= 4984 && engagement <= 103) {
    nivelRiesgo = "Level 1";
    } else if ((alcance >= 4985 && alcance <= 6364) && (engagement >= 104 && engagement <= 126)) {
    nivelRiesgo = "Level 2";
    } else if (alcance >= 6365 && engagement >= 127) {
    nivelRiesgo = "Level 3";
    } else if (alcance > 4985 || engagement > 104) { // <-- Nuevo else if
    const x = (temaSensible === 'yes' && mencionaMarca === 'yes') ? 1 : 0;
    const y = (alcance > 4985) ? 1 : 0; // <-- Valor original (6365)
    const z = (engagement > 104) ? 1 : 0; // <-- Valor original (127)
    nivelRiesgo = x + y + z;
//=============== Convertir el resultado numérico a un string "Level X"================/

    if (typeof nivelRiesgo === 'number') {
        nivelRiesgo = "Level " + nivelRiesgo;
    }
    } else {
    nivelRiesgo = "Nivel no definido"; 
    }
    const resultadoInput = document.querySelector('#resultado');
    resultadoInput.value = nivelRiesgo;
//=============== Aplicar color según el nivel de riesgo (usando clases CSS)=================/

resultadoInput.classList.remove("level-1", "level-2", "level-3", "nivel-no-definido"); // Limpiar clases anteriores
if (nivelRiesgo === "Level 1") {
    resultadoInput.classList.add("level-1");
} else if (nivelRiesgo === "Level 2") {
    resultadoInput.classList.add("level-2");
} else if (nivelRiesgo === "Level 3") {
    resultadoInput.classList.add("level-3");
} else {
    resultadoInput.classList.add("nivel-no-definido"); // Clase para "Nivel no definido"
}
});
/*=============== Usamos la función para esuchar la entrada del usuario, en este caso cuando el usuario usa el [botón de borrar]  ===============*/ 

    document.querySelector('.login__button-ghost').addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector('#tema-sensible').value = '';
    document.querySelector('#menciona-marca').value = '';
    document.querySelector('#alcance').value = '';
    document.querySelector('#engagement').value = '';
    document.querySelector('#resultado').value = '';
    
    const resultadoInput = document.querySelector('#resultado');
    resultadoInput.value = '';
    resultadoInput.classList.remove("level-1", "level-2", "level-3"); // <---  Aquí se eliminan las clases de color
    });