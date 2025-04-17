import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import sendResponse from "../../../helpers/sendResponse";
import { StatusCodes } from "http-status-codes";
import { ServiceRecordServices } from "./service.service";

const createServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await ServiceRecordServices.createServiceRecord(data);
  sendResponse(res, StatusCodes.CREATED, {
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceRecordServices.getAllServices();
  sendResponse(res, StatusCodes.OK, {
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getSingleServicesRecord = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ServiceRecordServices.getSingleServices(id);
    sendResponse(res, StatusCodes.OK, {
      success: true,
      message: "service record fetched successfully",
      data: result,
    });
  }
);
const updateSingleServicesRecord = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body
    const result = await ServiceRecordServices.updateSingleServicesRecord(id,data||{});
    sendResponse(res, StatusCodes.OK, {
      success: true,
      message: "service record fetched successfully",
      data: result,
    });
  }
);


const getPendingOrOverDueServiceRecord = catchAsync(
  async (req: Request, res: Response) => {
    
    const result = await ServiceRecordServices.getPendingOrOverDueServiceRecord();
    sendResponse(res, StatusCodes.OK, {
      success: true,
      message: "Overdue or pending services fetched successfully",
      data: result,
    });
  }
);

export const serviceRecordController = {
  createServiceRecord,
  getAllServiceRecord,
  getSingleServicesRecord,
  updateSingleServicesRecord,
  getPendingOrOverDueServiceRecord
};
