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
