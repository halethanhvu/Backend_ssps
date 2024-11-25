import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './src/config/mongodb.js';
import userRouter from './src/routes/userRoute.js';
import printerRouter from './src/routes/printerRoute.js';
import processRouter from './src/routes/processRouter.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/user',userRouter)
app.use('/api/printer',printerRouter)
app.use('/api/process',processRouter)

app.get('/', (req, res) => {
   res.send('This is a test');
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
 });