import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router()

// Rotas USER
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

// Rotas apenas quando for autenticado
router.get('/detail', isAuthenticated, new DetailUserController().handle);

export { router };