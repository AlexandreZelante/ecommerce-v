const { Router } = require('express');

const router = Router();

const { create } = require("../database/mongodb");
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

// Receive the request
// Call the controller
// Send response to user

// User -> Routes -> Controller (All logic) -> Calls Database (connection)

router.get('/products', (req, res) => {
  // Return all products

  res.send(products);
});

router.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find(product => product._id === id);

  res.send(product);
});

// Add new product
router.post('/products', async  (req, res) => {
  const product = req.body;
  try {
    const response = await create("products", product);

    res.send({
      success: true,
      response: response
    });
  } catch (error) {
    res.send({
      success: false,
      response: error
    });
  }
});
// update a product
router.put('/products/:id', (req, res) => {
  const { id } = req.params;

});
//delete a product
router.delete('/products/:id', (req, res) => {
  const { id } = req.params;
});

module.exports = router;