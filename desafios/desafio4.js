const fs = require('fs');
const path = require('path');

function lerAquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString());
        });
    });
}

const caminho = path.join(__dirname, '..', 'dados', 'legendas', 'legendas_01.srt');

const filtrarTexto = function (texto) {
    return texto.split('\n\r').map(function (item) {
        const novoTexto = item.split('\r\n');
        return novoTexto;
    })
}

const removeCabecalho = function (array) {
    return array.map(function (obj) {
        obj.shift(0);
        obj.shift(0);
        return obj;
    })
}

lerAquivo(caminho)
    .then(texto => filtrarTexto(texto))
    .then(texto => removeCabecalho(texto))
    .then(console.log);