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
