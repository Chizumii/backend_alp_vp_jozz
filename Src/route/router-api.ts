// this router can only be accessed by unauthenticated people

import express from "express"
import { UserController } from "../controller/user-controller"
import { BeritaController } from "../controller/berita-controller"
import { TournamentController } from "../controller/tournament-controller"

export const router = express.Router()
router.post("/api/register", UserController.register);
router.post("/api/login", UserController.login);

router.post("/berita", BeritaController.create);
router.get("/berita", BeritaController.getAll);
router.delete("/berita/:id", BeritaController.delete);

router.post("/tournament", TournamentController.create);
router.get("/tournament", TournamentController.getAll);
router.put("/tournament/:id", TournamentController.update); 

