const promise = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
});

const primeiroElemento = (arrayOutString) => arrayOutString[0];
const letraMinuscula = letra => letra.toLowerCase();

promise
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log);

function esperarPro(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Resolve');
            resolve();
        },tempo)
    });
}
esperarPro().then(() => esperarPro());


function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max];
    return new Promise(resolve => {
       setTimeout(function () {
           const fator = max - min + 1;
           const aleatorio = parseInt(Math.random() * fator) + min;
           resolve(aleatorio)
       }, tempo)
    });
}

gerarNumerosEntre(1,60, 2000).then(console.log);

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 5500),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })

async function imprimeNumeros() {
    let numero1 = null;
    let numero2 = null;

    await gerarNumerosEntre(1, 60, 4000).then(numero => numero1 = numero);
    console.log(`O valor do numero 1 e: ${numero1}`);

    await gerarNumerosEntre(1, 60, 4000).then(numero => numero2 = numero);
    console.log(`O valor do numero 2 e: ${numero2}`);
}

imprimeNumeros();