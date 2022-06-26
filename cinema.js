
let cinema = "CineJey"
const catalogo = require("./database/catalogo.json")
const fs = require('fs')

const adicionarFilme = (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) => {
    const novoFilme = {
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoDeLancamento: anoDeLancamento,
        emCartaz: emCartaz
    }
    catalogo.filmes.push(novoFilme);
    const json = JSON.stringify(catalogo);
    fs.writeFileSync('./database/catalogo.json', json);
}

function buscarFilme(filmeBuscad){
    for (let i = 0; i < catalogo.filmes.length; i++) {  
        const element = catalogo.filmes[i].codigo
        if (filmeBuscad==element) {
            console.log(catalogo.filmes[i])
        }
    }
}

function alterarStatusEmCartaz(codigo) {
    for (let i = 0; i < catalogo.filmes.length; i++) {
        catalogo.filmes[i].codigo == codigo ? catalogo.filmes[i].emCartaz = !catalogo.filmes[i].emCartaz : ''
    }
}

var listarFilmesEmCartaz = catalogo.filmes.filter(function(obj){
    return obj.emCartaz == true
})

console.log(catalogo)
