import express from 'express';
import { connectDB } from './config/db';
import accountRoutes from './routes/account.route';
import authRoutes from './routes/auth.route';
import uploadRoutes from './routes/upload.route';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/accounts', accountRoutes);
app.use('/api', authRoutes);  
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!!');
});

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
