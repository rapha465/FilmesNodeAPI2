import filmesModel from "../models/Filmes.js"

class FilmesService {
  
async Buscar() {
 try {
    return await filmesModel.Buscar();
 } catch (error) {
  throw error;
}
}

async BuscarUm() {
   try {
   return await filmesModel.BuscarUm(id);
 } catch (error) {
   throw error;
}
}

async Criar(id, nome, personagem, classificacao) {
 try {
     return await filmesModel.Criar(
        id, nome, personagem, classificacao
     );
  } catch (error) {
   throw error;
}
}

async Alterar(id, nome, personagem, classificacao) {
     try {
    return await filmesModel.Alterar(
    id, nome, personagem, classificacao
 );
 } catch (error) {
      throw error;
 }
  }

 async Deletar(id) {
    try {
   return await filmesModel.Deletar(id);
} catch (error) {
   throw error;
        }
    }
}


export default new FilmesService();

