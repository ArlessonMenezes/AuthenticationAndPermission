import { Router } from 'express';

import { addressRoutes } from '../modules/address/routes/address.routes';
import { authRoutes } from '../modules/auth/routes/auth.routes';
import { userRoutes } from '../modules/user/routes/user.routes';

const routes = Router();

routes.use(userRoutes);

routes.use(authRoutes);

routes.use(addressRoutes);

export { routes };