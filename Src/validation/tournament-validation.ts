import { z, ZodType } from "zod";

export class TournamentValidation {
    static readonly CREATE: ZodType = z.object({
        nama_tournament: z.string().min(1).max(100),
        description: z.string().min(1).max(100),
        image: z.object({
            fieldname: z.string(),
            originalname: z.string(),
            encoding: z.string(),
            mimetype: z.string(),
            filename: z.string(),
            path: z.string(),
            size: z.number()
        }),
        tipe: z.string().min(1).max(100),
        biaya: z.string().min(1).max(100),
        LokasiID: z.string().min(1).max(100),
    });

    static readonly UPDATE: ZodType = z.object({
        nama_tournament: z.string().min(1).max(100),
        description: z.string().min(1).max(100),
        image: z.object({
            fieldname: z.string(),
            originalname: z.string(),
            encoding: z.string(),
            mimetype: z.string(),
            filename: z.string(),
            path: z.string(),
            size: z.number()
        }),
        tipe: z.string().min(1).max(100),
        biaya: z.string().min(1).max(100),
        LokasiID: z.string().min(1).max(100),
    });
}