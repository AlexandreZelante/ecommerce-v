const express = require("express");

const app = express();

app.get('/health', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});