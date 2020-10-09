const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const concatenarNome = arquivo => path.join(caminho, arquivo);
            let arquivos = fs.readdirSync(caminho);
            arquivos = resolve(arquivos.map(concatenarNome));
            resolve(arquivos);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    lerDiretorio
}