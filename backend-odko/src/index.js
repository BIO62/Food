import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongooseConnect } from './utils/mongoose-connect.js';
import { userRouter } from './routes/user-router.js';
import { foodRouter } from './routes/food-router.js';
import { categoryRouter } from './routes/catergory-routes.js';
import { orderRouter } from './routes/order-routers.js';

dotenv.config();

const app = express(); 
const PORT =  8000;

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB
mongooseConnect();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// }
// );

app.use('/user', userRouter);
app.use('/food', foodRouter);
app.use('/category', categoryRouter);
app.use('/order', orderRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
