import express from "express";
import { bikeController } from "./bike.controller";


const router = express.Router();

router.post("/",bikeController.createBike);
router.get("/",bikeController.getAllBikes);
router.get("/:id",bikeController.getSingleBike)
export const bikeRoutes = router;