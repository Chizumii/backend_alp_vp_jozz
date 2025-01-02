import { z, ZodType } from "zod";

export class TeamValidation{
    static readonly CREATE: ZodType = z.object({
        namatim : z.string().min(1).max(100),
        image : z.string().min(1).max(100),
        teamID: z.number().int().optional(),
    });
    static readonly UPDATE: ZodType = z.object({
        namatim : z.string().min(1).max(100),
        image : z.string().min(1).max(100),
    });
}