import { Router, Request, Response } from "express";
import { createMovie, findMovieByID, getAllMovies, removeMovie, updateMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { movieCheckValidation } from './middleware/movieValidation';

const router = Router();

export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).send("API Working!");
    })
    .post("/movie", movieCheckValidation(), validate, createMovie)
    .get("/movie/:id", findMovieByID)
    .get("/movie", getAllMovies)
    .delete("/movie/:id", removeMovie)
    .patch("/movie/:id", movieCheckValidation(), validate, updateMovie)