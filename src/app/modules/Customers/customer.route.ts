import express from "express";
import { customerController } from "./customer.controller";
import validateRequest from "../../middleware/validateRequest";
import { CustomerValidationSchema } from "./customer.validation";

const router = express.Router();
router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomer);
router.get("/:id", customerController.getSingleCustomer);
router.put(
  "/:id",
  validateRequest(CustomerValidationSchema.customerUpdateValidation),
  customerController.updateSingleCustomer
);

router.delete('/:id',customerController.deleteSingleCustomer);

export const customerRoutes = router;
