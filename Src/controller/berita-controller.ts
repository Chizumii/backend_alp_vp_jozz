import { Request, Response } from "express";
import { BeritaService } from "../service/berita-service";
import { CreateBerita } from "../model/berita-model";
import { ResponseError } from "../error/response-error";

export class BeritaController {
    // Create a new berita
    static async create(req: Request, res: Response): Promise<void> {
        try {
            const request: CreateBerita = {
                judul: req.body.judul,
                caption: req.body.caption,
                judul_berita: req.body.judul_berita,
                image: req.body.image,
                UserId: req.body.UserId,
            };
    
            const berita = await BeritaService.create(request);
            res.status(201).json({
                status: "success",
                data: berita,
            });
        } catch (error) {
            console.error("Error creating berita:", error);
            if (error instanceof ResponseError) {
                res.status(error.status).json({
                    status: "error",
                    message: error.message,
                });
            } else {
                res.status(500).json({
                    status: "error",
                    message: "Internal server error",
                });
            }
        }
    }
    

    // Get all berita
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const beritaList = await BeritaService.getAll();
            res.status(200).json({
                status: "success",
                data: beritaList,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Internal server error",
            });
        }
    }

    // Get berita by ID
    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const beritaId = parseInt(req.params.id, 10);

            if (isNaN(beritaId)) {
                res.status(400).json({
                    status: "error",
                    message: "Invalid ID format",
                });
                return;
            }

        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Internal server error",
            });
        }
    }

    // Delete berita by ID
    static async delete(req: Request, res: Response): Promise<void> {
        try {
            const beritaId = parseInt(req.params.id, 10);

            if (isNaN(beritaId)) {
                res.status(400).json({
                    status: "error",
                    message: "Invalid ID format",
                });
                return;
            }

            const deleted = await BeritaService.delete(beritaId);
            if (!deleted) {
                res.status(404).json({
                    status: "error",
                    message: "Berita not found",
                });
                return;
            }

            res.status(200).json({
                status: "success",
                message: "Berita deleted successfully",
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Internal server error",
            });
        }
    }
}
