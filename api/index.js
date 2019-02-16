import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.get('/api/v1/meals', (req, res) => {
  res.send('Meals endpoint...');
});

app.listen(5000);
