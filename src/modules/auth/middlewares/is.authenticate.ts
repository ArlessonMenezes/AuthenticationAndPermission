import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";

interface ITokenPayload {
  iat: number;
  exp: number;
  data: number;
}

export function isAuthenticated(
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT token is missing")
  };

  const [, token ] = authHeader.split(' ');

  try {
    const decodeToken = verify(token, process.env.JWT_SECRET ?? '');

    const { data } = decodeToken as ITokenPayload;

    req.user = {
      id: data
    }

    return next();
  } catch {
    throw new AppError("Invalid JWT token")
  }
}