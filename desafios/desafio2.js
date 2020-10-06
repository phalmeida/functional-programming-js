const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
];

const getFragios = (item) => item.fragil;
const getQtdePreco = (item) => item.qtde * item.preco;
const somaMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1;
    const novaTotal = acc.total + el;
    return {
        qtde: novaQtde,
        total: novaTotal,
        media: novaTotal / novaQtde
    };
};

const media = carrinho
    .filter(getFragios)
    .map(getQtdePreco)
    .reduce(somaMedia, {qtde: 0, total: 0, media: 0}).media;

console.log(media);