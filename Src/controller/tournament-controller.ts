import { Request, Response, NextFunction } from "express";
import { TournamentService } from "../service/tournament-service";

export class TournamentController {
    // Create a new tournament
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const tournamentData = req.body;
            const request = {
                ...tournamentData,
                image: req.file,
            }
            const newTournament = await TournamentService.createTournament(request);

            res.status(201).json({
                message: "Tournament created successfully",
                data: newTournament,
            });
        } catch (error) {
            next(error);
        }
    }

    // Get all tournaments
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const tournaments = await TournamentService.listTournaments();

            res.status(200).json({
                message: "Tournaments retrieved successfully",
                data: tournaments,
            });
        } catch (error) {
            next(error);
        }
    }

    // Update a tournament by ID
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const tournamentData = req.body;
            const request = {
                ...tournamentData,
                image: req.file,
            }
            const updatedTournament = await TournamentService.updateTournament(parseInt(id, 10), request);

            res.status(200).json({
                message: "Tournament updated successfully",
                data: updatedTournament,
            });
        } catch (error) {
            next(error);
        }
    }

    // Delete a tournament by ID
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await TournamentService.deleteTournament(parseInt(id, 10));

            res.status(200).json({
                message: "Tournament deleted successfully",
            });
        } catch (error) {
            next(error);
        }
    }

    static async listTournaments(req: Request, res: Response, next: NextFunction) {
        try {
            const tournaments = await TournamentService.listTournaments();

            res.status(200).json({
                message: "Tournaments retrieved successfully",
                data: tournaments,
            });
        } catch (error) {
            next(error);
        }
    }
}
