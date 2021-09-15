const { Router } = require('express');

const router = Router();

// Rotas:
// - GET: /products, /products/:id
// - POST: /products
// - PUT: /products/:id
// - DELETE: /products/:id

const products = [
  {
    _id: "1",
    name: "Blue Shoes",
    description: "Nice shoes",
    price: 123.3,
    quantity: 12,
  },
  {
    _id: "2",
    name: "Red Shoes",
    description: "Nice shoes",
    price: 123.3,
    quantity: 12,
  },
  {
    _id: "3",
    name: "Green Shoes",
    description: "Nice shoes",
    price: 123.3,
    quantity: 12,
  }
]

router.get('/products', (req, res) => {
  // Return all products

  res.send(products);
});

router.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find(product => product._id === id);

  res.send(product);
});

module.exports = router;