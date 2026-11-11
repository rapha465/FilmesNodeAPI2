const filmes = new Array("Id", "Nome", "Personagem", "Classificação");

class Filmes {
 async Buscar() {
        return filmes
    }

    async BuscarUm(id) {
        return filmes[id]
    }

    async Criar(id, nome, personagem, classificacao) {
        filmes.push({
            id: id,
            nome: nome,
            personagem: personagem,
            classificacao: classificacao
        })
    }

    async Alterar(id, nome, personagem, classificacao) {
        filmes[id] = {
            id: id,
            nome: nome,
            personagem: personagem,
            classificacao: classificacao
        }
    }

    async Deletar(id) {
        filmes.splice(id, 1)
    }
}

export default new Filmes()
