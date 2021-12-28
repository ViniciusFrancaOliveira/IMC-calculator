const form = document.querySelector("#formIMC");



form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = document.getElementById('peso');
    const inputAltura = document.getElementById('altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || !altura) {
        setResultado('Peso ou Altura inválidos.', false);
        return;
    }

    const imc = getImc(peso, altura).toFixed(2);
    const valorImc = getValoresImc(imc);

    const msg = `Seu IMC é ${imc}, ${valorImc}.`;
    setResultado(msg, true);
});

function getValoresImc(imc) {
    const valorImc = ['abaixo do peso', 'peso normal', 'sobrepeso',
        'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    if (imc >= 40) {
        return valorImc[5];
    } else if (imc >= 35) {
        return valorImc[4];
    } else if (imc >= 30) {
        return valorImc[3];
    } else if (imc >= 25) {
        return valorImc[2];
    } else if (imc >= 18.5) {
        return valorImc[1];
    } else {
        return valorImc[0];
    }
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    const p = criaP();
    

    if (isValid) { 
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('invalido');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criaP(className) {
    const p = document.createElement('p');
    return p;
}

function getImc(peso, altura) {
    return peso / altura ** 2;
}

