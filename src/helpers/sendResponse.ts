import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  statusCode: number,
  jsonData: {
    success: boolean;
    message: string;
    data: T | null | undefined | T[];
  }
) => {
  const { success, message, data } = jsonData;

  res.status(statusCode).json({
    success,
    message,
    data: data || null,
  });
};

export default sendResponse;
