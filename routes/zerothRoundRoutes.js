import express from 'express';
import { registerZerothRound } from '../controllers/zerothRoundController.js';

const router = express.Router();

router.post('/', registerZerothRound);

export default router;
