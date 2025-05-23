"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.get("/status", service_controller_1.serviceRecordController.getPendingOrOverDueServiceRecord);
router.post("/", service_controller_1.serviceRecordController.createServiceRecord);
router.get("/", service_controller_1.serviceRecordController.getAllServiceRecord);
router.get("/:id", service_controller_1.serviceRecordController.getSingleServicesRecord);
router.put("/:id", service_controller_1.serviceRecordController.updateSingleServicesRecord);
exports.serviceRecordsRoutes = router;
