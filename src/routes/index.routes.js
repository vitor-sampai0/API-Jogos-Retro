import express from 'express';

//importar todas as rotas

import authRouter from './auth.routes.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

//Rotas Publicas
router.use('/auth', authRouter);

//Rotas Protegidas
router.use(authMiddleware);

export default router;