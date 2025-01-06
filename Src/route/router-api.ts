// this router can only be accessed by unauthenticated people

import express from "express"
import { UserController } from "../controller/user-controller"
import { BeritaController } from "../controller/berita-controller"
import { TournamentController } from "../controller/tournament-controller"
import { authMiddleware } from "../middleware/auth-middleware"
import { upload } from "../utils/storage"

export const router = express.Router()
router.use(authMiddleware)

router.post("/berita", BeritaController.create);
router.get("/berita", BeritaController.getAll);
router.delete("/berita/:id", BeritaController.delete);

router.post("/api/tournament", upload.single('image'), TournamentController.create);
router.get("/api/tournament", TournamentController.getAll);
router.patch("/api/tournament/:id", upload.single('image'), TournamentController.update); 
router.delete("/api/tournament/:id", TournamentController.delete);
