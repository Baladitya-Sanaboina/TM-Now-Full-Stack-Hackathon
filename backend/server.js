import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import homeRouter from './routes/Home.js';
import authRouter from './routes/authRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());

connectDB();

app.use('/', homeRouter);
app.use("/api/auth", authRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
