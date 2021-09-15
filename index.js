const express = require("express");
const router = require('./routes/products');

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log('Running on port 3000');
});
