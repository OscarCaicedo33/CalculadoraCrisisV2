// Límites de riesgo para cada red social
const limites = {
    red1: { alcance: [10000, 20000, 30000], engagement: [100, 200, 300] },
    red2: { alcance: [5000, 15000, 25000], engagement: [50, 150, 250] },
    red3: { alcance: [8000, 18000, 28000], engagement: [80, 180, 280] },
    red4: { alcance: [8000, 18000, 28000], engagement: [80, 180, 280] },
    red5: { alcance: [8000, 18000, 28000], engagement: [80, 180, 280] },
    red6: { alcance: [8000, 18000, 28000], engagement: [80, 180, 280] },
};

// Botón de calcular
document.querySelector('.login__button').addEventListener('click', function (e) {
    e.preventDefault();

    const redSocial = document.querySelector('#red-social').value;
    const temaSensible = document.querySelector('#tema-sensible').value;
    const mencionaMarca = document.querySelector('#menciona-marca').value;
    const alcance = parseInt(document.querySelector('#alcance').value);
    const engagement = parseInt(document.querySelector('#engagement').value);

    if (!limites[redSocial]) {
        alert("Por favor, seleccione una red social válida.");
        return;
    }

    // Obtener los límites específicos de la red seleccionada
    const { alcance: alcances, engagement: engagements } = limites[redSocial];

    // Calcular nivel de riesgo
    let nivelRiesgo;
    if (alcance <= alcances[0] && engagement <= engagements[0]) {
        nivelRiesgo = "Level 1";
    } else if (alcance <= alcances[1] && engagement <= engagements[1]) {
        nivelRiesgo = "Level 2";
    } else if (alcance > alcances[2] || engagement > engagements[2]) {
        const x = temaSensible === 'yes' && mencionaMarca === 'yes' ? 1 : 0;
        const y = alcance > alcances[0] ? 1 : 0;
        const z = engagement > engagements[0] ? 1 : 0;
        nivelRiesgo = `Level ${x + y + z}`;
    } else {
        nivelRiesgo = "Nivel no definido";
    }

    // Mostrar resultado
    const resultadoInput = document.querySelector('#resultado');
    resultadoInput.value = `${nivelRiesgo} (${redSocial})`;

    // Actualizar clases CSS
    resultadoInput.classList.remove("level-1", "level-2", "level-3", "nivel-no-definido");
    if (nivelRiesgo.includes("Level 1")) resultadoInput.classList.add("level-1");
    else if (nivelRiesgo.includes("Level 2")) resultadoInput.classList.add("level-2");
    else if (nivelRiesgo.includes("Level 3")) resultadoInput.classList.add("level-3");
    else resultadoInput.classList.add("nivel-no-definido");
});

// Botón de borrar
document.querySelector('.login__button-ghost').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#red-social').value = '';
    document.querySelector('#tema-sensible').value = '';
    document.querySelector('#menciona-marca').value = '';
    document.querySelector('#alcance').value = '';
    document.querySelector('#engagement').value = '';
    document.querySelector('#resultado').value = '';
    document.querySelector('#resultado').classList.remove("level-1", "level-2", "level-3", "nivel-no-definido");
});
