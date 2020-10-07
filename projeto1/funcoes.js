const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
    return new Promise(resolve => {
        const concatenarNome = arquivo => path.join(caminho, arquivo);
        let arquivos = fs.readdirSync(caminho);
        resolve(arquivos.map(concatenarNome));
    })
}

module.exports = {
    lerDiretorio
}