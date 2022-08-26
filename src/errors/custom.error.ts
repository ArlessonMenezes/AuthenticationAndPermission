import { NextFunction, Request, Response } from 'express';

import { AppError } from './AppError';

export function customError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',     
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
}