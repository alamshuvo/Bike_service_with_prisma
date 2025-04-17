import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import sendResponse from "../../../helpers/sendResponse";
import { StatusCodes } from "http-status-codes";
import { bikeServices } from "./bike.service";
const createBike = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await bikeServices.createBike(data);
  sendResponse(res, StatusCodes.CREATED, {
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await bikeServices.getAllBikes();
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await bikeServices.getSingleBike(id);
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});



export const bikeController = {
  createBike,
  getAllBikes,
  getSingleBike
};
