import express from 'express';
import { customerController } from './customer.controller';


const router = express.Router();
router.post("/",customerController.createCustomer);
router.get("/",customerController.getAllCustomer);
router.get("/:id",customerController.getSingleCustomer)



export const customerRoutes = router;