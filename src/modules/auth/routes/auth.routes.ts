import { Router } from 'express';

import { UserAuthController } from '../controller/user-auth.controller';

export const authRoutes = Router();

authRoutes.post("/session", new UserAuthController().login);