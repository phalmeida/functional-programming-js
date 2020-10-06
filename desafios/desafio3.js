const fs = require('fs');
const path = require('path');

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString());
        });
    });
};

const caminho = path.join(__dirname, 'dados.txt');
const retirarBarraN = item => item.replace('\n', '');

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r').map(retirarBarraN))
    .then(linhas => linhas.join(','))
    .then(conteundo => `O valor final é: ${conteundo}`)
    .then(console.log);

