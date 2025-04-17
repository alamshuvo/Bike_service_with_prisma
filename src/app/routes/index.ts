import express from "express";
import { customerRoutes } from "../modules/Customers/customer.route";
import { bikeRoutes } from "../modules/Bike/bike.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route:customerRoutes
  },
  {
    path:"/bikes",
    route:bikeRoutes
  }
];

moduleRoutes.forEach((route)=>{
    router.use(route.path, route.route);
})

export default router;
