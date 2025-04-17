import express from "express";
import { customerRoutes } from "../modules/Customers/customer.route";
import { bikeRoutes } from "../modules/Bike/bike.route";
import { serviceRecordsRoutes } from "../modules/ServiceRecord/service.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route:customerRoutes
  },
  {
    path:"/bikes",
    route:bikeRoutes
  },
  {
    path:"/services",
    route:serviceRecordsRoutes
  }
];

moduleRoutes.forEach((route)=>{
    router.use(route.path, route.route);
})

export default router;
