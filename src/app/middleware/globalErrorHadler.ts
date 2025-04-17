import { ErrorRequestHandler } from 'express';

import { ZodError } from 'zod';
import config from '../config';
import handleZodError from '../error/handleZodError';
import handleInternalServerError from '../error/handleInternalServerError';
import AppError from '../error/AppError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCodes = err.StatusCode || 400;
  let message = err.message || 'something Went Wrong';
  let error = err || 'some error here';

  if (err instanceof ZodError) {
    const simpliFiedError = handleZodError(err);
    statusCodes = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    error = simpliFiedError?.err;
  } else if (err instanceof AppError) {
    statusCodes = err?.statusCode;
    message = err?.message;
    error = err;
  } 
  else if (err?.code === 500){
    const simpliFiedError = handleInternalServerError(err)
    statusCodes = simpliFiedError?.statusCode;
    message = simpliFiedError?.message;
    error = simpliFiedError?.err;
  }

  res.status(statusCodes).json({
    success: false,
    statusCodes,
    message,
    stack: config.node_env === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;