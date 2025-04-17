import express from "express";
import { serviceRecordController } from "./service.controller";
import validateRequest from "../../middleware/validateRequest";


const router = express.Router();
router.get("/status",serviceRecordController.getPendingOrOverDueServiceRecord)
router.post("/", serviceRecordController.createServiceRecord);
router.get("/", serviceRecordController.getAllServiceRecord);
router.get("/:id", serviceRecordController.getSingleServicesRecord);
router.put(
  "/:id",serviceRecordController.updateSingleServicesRecord
);

export const serviceRecordsRoutes = router;
