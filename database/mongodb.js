const { MongoClient } = require('mongodb');

const connectionString = 'mongodb+srv://admin:admin@cluster0.qcqmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

MongoClient.connect(connectionString, (err, client) => {
  if (err) {
    console.log('Err', err);
    // Return 
  }

  const db = client.db('ecommerce-v');

  db.collection('products').insertOne({name: "shoes", price: 10}).then(response => {
    console.log('good', response);
  }).catch(err => {
    console.log(err);
  })
});

//create functions to create, delete, update and find data 
//connect with router - controller - 