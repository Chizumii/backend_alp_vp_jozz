// this router can only be accessed by unauthenticated people

import express from "express"
import { UserController } from "../controller/user-controller"
import { authMiddleware } from "../middleware/auth-middleware"
import { BeritaController } from "../controller/berita-controller"
import { TournamentController } from "../controller/tournament-controller"
import { TeamController } from "../controller/team-controller"
import { upload } from "../utils/upload"

export const router = express.Router()
router.use(authMiddleware)

router.post("/api/logout", UserController.logout)
router.post("/berita", BeritaController.create);
router.get("/berita", BeritaController.getAll);
router.delete("/berita/:id", BeritaController.delete);

router.post("/tournament", TournamentController.create);
router.get("/tournament", TournamentController.getAll);
router.put("/tournament/:id", TournamentController.update); 

router.post("/api/team", upload.single('image'), TeamController.create);
router.get("/api/team", TeamController.getAll);
router.patch("/api/team/:id", upload.single('image'), TeamController.update); 
router.delete("/api/team/:id", TeamController.delete);