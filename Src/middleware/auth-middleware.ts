import { Response, NextFunction } from "express"
import { prismaClient } from "../application/database"
import { UserRequest } from "../type/user-request"
import { PrismaClient } from "@prisma/client"

const prisma= new PrismaClient();

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
    const token = req.get("X-API-TOKEN")

    if (token) {
        const user = await prismaClient.user.findFirst({
            where: {
                Token: token,
            },
        })

        if (user) {
            req.user = user
            next()
            return
        }
    }

    res.status(401)
        .json({
            errors: "Unauthorized",
        })
        .end()
}