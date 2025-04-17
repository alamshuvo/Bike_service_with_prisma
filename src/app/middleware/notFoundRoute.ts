import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import config from "../config";

const notFound=(req:Request,res:Response,next:NextFunction)=>{
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        status:StatusCodes.NOT_FOUND,
        message: "Not Found",
        stack: config.node_env === "development" ? new Error().stack : undefined,
       
    });
}

export default notFound;