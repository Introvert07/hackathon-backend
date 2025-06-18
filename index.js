import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import zerothRoundRoutes from './routes/zerothRoundRoutes.js';
import firstRoundRoutes from './routes/firstRoundRoutes.js';
import secondRoundRoutes from './routes/secondRoundRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/zeroth', zerothRoundRoutes);
app.use('/api/first', firstRoundRoutes);
app.use('/api/second', secondRoundRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
