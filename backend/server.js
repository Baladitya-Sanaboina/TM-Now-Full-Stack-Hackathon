import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import homeRouter from './routes/Home.js';
import authRouter from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import cors from 'cors'

dotenv.config();
const app = express();

app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

connectDB();

app.use('/', homeRouter);
app.use("/api/auth", authRouter)
app.use("/api/tasks", taskRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
