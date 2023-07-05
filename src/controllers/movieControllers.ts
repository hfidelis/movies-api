import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    
    try {
        
        const data = req.body;
        const movie = await MovieModel.create(data);
        // Enviando status 201 (Recurso criado), e devolvendo os dados do filme para alguma visualização no front.
        return res.status(201).json(movie);

    } catch (err: any) {
        
        Logger.error(`Error: ${err.name} | ${err.message}`);
        return res.status(500).json({error: "Please, try again later!"});
    };

};

export async function findMovieByID(req: Request, res: Response) {
    
    try {
        
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if (!movie) {
            return res.status(404).json({error: "Movie doesn't exists"});
        };

        return res.status(200).json(movie);

    } catch (err: any) {
        
        Logger.error(`Error: ${err.name} | ${err.message}`);
        return res.status(500).json({error: "Please, try again later!"});
    };

};

export async function getAllMovies(req: Request, res: Response) {
    
    try {

        const movies = await MovieModel.find();

        return res.status(200).json(movies);
        
    } catch (err: any) {
        
        Logger.error(`Error: ${err.name} | ${err.message}`);
        return res.status(500).json({error: "Please, try again later!"});
    };

};

export async function removeMovie(req: Request, res: Response) {
    try {
        
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({error: "Movie doesn't exists!"});
        };

        await movie.deleteOne();

        return res.status(200).json({message: "Movie successfully removed."});

    } catch (err: any) {
        
        Logger.error(`Error: ${err.name} | ${err.message}`);
        return res.status(500).json({error: "Please, try again later!"});
    };
};

export async function updateMovie(req: Request, res: Response) {
    try {
        
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({error: "Movie doesn't exists!"});
        };

        await MovieModel.updateOne({_id: id}, data);

        return res.status(200).json(data);

    } catch (err: any) {
        
        Logger.error(`Error: ${err.name} | ${err.message}`);
        return res.status(500).json({error: "Please, try again later!"});

    };
};
