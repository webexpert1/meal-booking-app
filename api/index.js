import express from 'express';
import bodyParser from 'body-parser';
import mealsRoute from './routes/meal.route';
import ordersRoute from './routes/order.route';

// Set up the app with express
const app = express();

app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/orders', ordersRoute);


app.listen(3000);
