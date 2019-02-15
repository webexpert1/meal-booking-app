const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.get('/api/v1/meals', (req, res) => {
  res.send('Meals endpoint...');
});

app.listen(5000);
