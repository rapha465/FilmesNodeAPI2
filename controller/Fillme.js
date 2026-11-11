import express from "express";
import Filmes from "../services/Filmes.js";

const router = express.Router();

// Buscar todos os filmes
router.get("/", async (req, res) => {
    try {
        const filmes = await Filmes.Buscar();
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar filmes." });
    }
});

// Buscar um filme pelo ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const filme = await Filmes.BuscarUm(id);

        if (filme === undefined) {
            return res.status(404).json({
                mensagem: "Filme não encontrado."
            });
        }

        res.status(200).json(filme);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar filme." });
    }
});

// Criar um novo filme
router.post("/", async (req, res) => {
    try {
        const { id, nome, personagem, classificacao } = req.body;
        await Filmes.Criar(id, nome, personagem, classificacao);
        res.status(201).json({ mensagem: "Filme criado com sucesso." });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar filme." });
    }
});

// Alterar um filme
router.put("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const nome = req.body.nome;
        const personagem = req.body.personagem;
        const classificacao = req.body.classificacao;

        await Filmes.Alterar(id, nome, personagem, classificacao);

        res.status(200).json({ mensagem: "Filme alterado com sucesso." });
    } catch (error) {
        res.status(500).json({ mensagem: error.message || "Erro ao alterar filme." });
    }
});

// Deletar um filme
router.delete("/:id", async (req, res) => {
    try {
    const id = req.params.id;

    await ServiceFilmes.Deletar(id);
   
    res.send({ message: "Flme deletado com sucesso"});
    
   } catch (error) {

    res.status (500).send({message:error.message});
}

});
export default router;


