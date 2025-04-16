import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { customerServices } from "./customer.service";
import sendResponse from "../../../helpers/sendResponse";
import { StatusCodes } from "http-status-codes";
const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await customerServices.createCustomer(data);
  sendResponse(res, StatusCodes.CREATED, {
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await customerServices.getAllCustomers();
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await customerServices.getSingleCustomers(id);
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

export const customerController = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
};
