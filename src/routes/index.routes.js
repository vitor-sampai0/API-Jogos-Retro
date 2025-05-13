import express from 'express';

//importar todas as rotas

import authRouter from './auth.routes.js';
import gamesRouter from './games.routes.js'
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

//Rotas Publicas
router.use('/auth', authRouter);
router.use("/games", gamesRouter)
//Rotas Protegidas
router.use(authMiddleware);

export default router;