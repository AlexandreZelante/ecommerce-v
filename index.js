const express = require("express");
const router = require('./routes/products');

const app = express();

app.use(express.json());
app.use(router);

app.listen(3002, () => {
  console.log('Running on port 3002');
});
