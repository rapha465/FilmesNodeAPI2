import filmesRouter from "../controller/Fillme.js";
const router = express.Router();

// Buscar todos os filmes
router.get("/", FilmesController.Buscar);
// Criar um filme
router.post("/", FilmesController.Criar);
// Alterar um filme
router.put("/:id", FilmesController.Alterar);
// Deletar um filme
router.delete("/:id", FilmesController.Deletar);
export default filmesRouter;


