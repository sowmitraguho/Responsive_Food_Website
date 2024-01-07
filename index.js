const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('../news-portal/data/categories.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('News Portal Running...');
})

app.get('/categories', (req, res) => {
  res.send(categories);
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})