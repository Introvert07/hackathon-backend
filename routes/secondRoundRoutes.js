import express from 'express';
import { submitSecondRound } from '../controllers/secondRoundController.js';

const router = express.Router();

router.post('/', submitSecondRound);

export default router;
