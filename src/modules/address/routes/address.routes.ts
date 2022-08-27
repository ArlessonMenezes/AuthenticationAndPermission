import { Router } from "express";
import { isAuthenticated } from '../../auth/middlewares/is.authenticate';
import { addressController } from "../controller/address.controller";

export const addressRoutes = Router();

addressRoutes.post("/address/:idUser", isAuthenticated, new addressController().handle);
