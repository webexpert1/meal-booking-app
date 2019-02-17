import express from 'express';
import bodyParser from 'body-parser';
import mealsRoute from './routes/meal.route';
import ordersRoute from './routes/order.route';
import menuRoute from './routes/menu.route';

// Set up the app with express
const app = express();

app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/orders', ordersRoute);
app.use('/api/v1/menu', menuRoute);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
