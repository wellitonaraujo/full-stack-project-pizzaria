import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router()

// Rotas USER
router.post('/users', new CreateUserController().handle)

export { router };