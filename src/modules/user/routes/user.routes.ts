import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { isAuthenticated } from '../../auth/middlewares/is.authenticate';

export const userRoutes = Router();

userRoutes.post("/user", new UserController().create);

userRoutes.get("/users", isAuthenticated, new UserController().list);