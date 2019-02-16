import express from 'express';
import bodyParser from 'body-parser';
import mealsRoute from './routes/meal.route';

// Set up the app with express
const app = express();

app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);


app.listen(3000);
