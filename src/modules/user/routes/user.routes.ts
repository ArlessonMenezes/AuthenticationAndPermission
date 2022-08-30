import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../config/upload';
import { isAuthenticated } from '../../auth/middlewares/is.authenticate';
import { UserController } from '../controller/user.controller';

const upload = multer(uploadConfig);

export const userRoutes = Router();

userRoutes.post("/user", new UserController().create);

userRoutes.get("/users", isAuthenticated, new UserController().list);

userRoutes.patch("/user/avatar", isAuthenticated, upload.single('avatar'), new UserController().avatar);
