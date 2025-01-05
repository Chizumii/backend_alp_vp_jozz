import express from "express"
import { authMiddleware } from "../middleware/auth-middleware"
import { UserController } from "../controller/user-controller"

export const apiRouter = express.Router()
apiRouter.use(authMiddleware)

apiRouter.get("/", (req, res) => {
    res.send("Hello World!")
})

apiRouter.post("/api/register", UserController.register)
apiRouter.post("/api/login", UserController.login)
apiRouter.post("/api/logout", UserController.logout)
