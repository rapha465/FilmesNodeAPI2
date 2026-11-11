import express from "express";
import filmesRouter from "./models/controller/Filmes.js";

const app = express();

app.use(express.json());
app.use("/filmes", filmesRouter);

app.get("/", (req , res) => {
    res.json({message: "Hello World!"});
})

app.listen(3000, () => { 
console.log("Servidor rodando na porta 3000");
});