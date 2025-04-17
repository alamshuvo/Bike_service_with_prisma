import express from "express";
import { serviceRecordController } from "./service.controller";



const router = express.Router();
router.post("/",serviceRecordController.createServiceRecord);
router.get("/",serviceRecordController.getAllServiceRecord);
router.get("/:id",serviceRecordController.getSingleServicesRecord)

export const serviceRecordsRoutes = router;