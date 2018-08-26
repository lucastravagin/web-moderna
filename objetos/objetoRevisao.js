//Coleção dinãmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 220

console.log(produto)

//Deletando itens do objeto.

delete produto.nome
delete produto['Marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: '89000',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19 
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {

    }
}
//Podemos acessar os atributos a partir da notação ponto
carro.proprietario.endereco.numero = 1000

