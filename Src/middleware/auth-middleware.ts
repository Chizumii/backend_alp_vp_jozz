import { Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { UserRequest } from "../type/user-request";

const prisma = new PrismaClient();

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export const authMiddleware = async (
    req: UserRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.get("X-USER-ID"); // Mengambil user ID dari header

        if (userId) {
            const user = await prisma.user.findUnique({
                where: {
                    UserId: parseInt(userId, 10) // Pastikan userId diubah menjadi angka
                },
            });

            if (user) {
                req.user = user;
                next();
                return
            }
        }

        res.status(401).json({
            errors: "Unauthorized",
        });
    } catch (error) {
        res.status(500).json({
            errors: "Internal Server Error",
        });
    }
};
