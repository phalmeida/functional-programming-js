const fs = require('fs');

function lerDiretorio(caminho) {
    let arquivos = fs.readdirSync(caminho);
    console.log(arquivos);
}
module.exports = {
    lerDiretorio
}