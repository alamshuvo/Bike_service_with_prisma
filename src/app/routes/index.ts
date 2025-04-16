import express from "express";
import { customerRoutes } from "../modules/Customers/customer.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route:customerRoutes
  },
];

moduleRoutes.forEach((route)=>{
    router.use(route.path, route.route);
})

export default router;
