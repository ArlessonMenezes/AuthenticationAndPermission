import { Router } from "express";
import { userRoutes } from "../modules/user/routes/user.routes";
import { authRoutes } from '../modules/auth/routes/auth.routes';

const routes = Router();

routes.use(userRoutes);

routes.use(authRoutes);

export { routes };