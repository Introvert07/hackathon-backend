import express from 'express';
import { submitFirstRound } from '../controllers/firstRoundController.js';

const router = express.Router();

router.post('/', submitFirstRound);

export default router;
