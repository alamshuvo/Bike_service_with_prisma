import express from "express";
import { serviceRecordController } from "./service.controller";
import validateRequest from "../../middleware/validateRequest";
import { serviceValidationSchema } from "./service.validation";

const router = express.Router();
router.post("/", serviceRecordController.createServiceRecord);
router.get("/", serviceRecordController.getAllServiceRecord);
router.get("/:id", serviceRecordController.getSingleServicesRecord);
router.put(
  "/:id",serviceRecordController.updateSingleServicesRecord
);
router.put("/status")
export const serviceRecordsRoutes = router;
