// this router can only be accessed by unauthenticated people

import express from "express"
import { UserController } from "../controller/user-controller"
import { authMiddleware } from "../middleware/auth-middleware"
import { BeritaController } from "../controller/berita-controller"
import { TournamentController } from "../controller/tournament-controller"
<<<<<<< HEAD
import { TeamController } from "../controller/team-controller"
import { upload } from "../utils/storage"
=======
import { LokasiController } from "../controller/lokasi-controller"
import { TeamController } from "../controller/team-controller"
>>>>>>> d8094244292d004f62d3496cdf3c4362c0ad32cd

export const router = express.Router()
router.use(authMiddleware)

router.post("/api/logout", UserController.logout)
<<<<<<< HEAD
router.post("/berita", BeritaController.create);
router.get("/berita", BeritaController.getAll);
router.delete("/berita/:id", BeritaController.delete);
=======
router.put("/api/user", UserController.update);

router.post("/api/berita", upload.single('image'), BeritaController.create);
router.get("/api/berita", BeritaController.getAll);
router.get("/api/berita/:id", BeritaController.getById);
router.patch("/api/berita/:id", upload.single('image'), BeritaController.update);
router.delete("/api/berita/:id", BeritaController.delete);
>>>>>>> d8094244292d004f62d3496cdf3c4362c0ad32cd

router.post("/tournament", TournamentController.create);
router.get("/tournament", TournamentController.getAll);
router.put("/tournament/:id", TournamentController.update); 

router.post("/api/team", upload.single('image'), TeamController.create);
router.get("/api/team", TeamController.getAll);
router.patch("/api/team/:id", upload.single('image'), TeamController.update); 
<<<<<<< HEAD
router.delete("/api/team/:id", TeamController.delete);
=======
router.delete("/api/team/:id", TeamController.delete);

router.post("/api/lokasi", LokasiController.create);
router.get("/api/lokasi", LokasiController.getAll);
router.patch("/api/lokasi/:id", LokasiController.update);
router.delete("/api/lokasi/:id", LokasiController.delete);
>>>>>>> d8094244292d004f62d3496cdf3c4362c0ad32cd
