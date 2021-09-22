const { MongoClient } = require('mongodb');

const connectionString = 'mongodb+srv://admin:admin@cluster0.qcqmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const database = 'ecommerce-v';

function create (collection, data) {
  return new Promise ((resolve, reject) => {
    MongoClient.connect(connectionString, (err, client) => {
      if (err) {
        console.log('Err', err);
        return reject(err);
      }

      const db = client.db('ecommerce-v');
    
      db.collection(collection).insertOne(data).then(response => {
        console.log('good', response);
        return resolve(response);
      })
    });
  })
}

module.exports = {
  create
}


// create().then(response => {}).catch(error => {});



//create functions to create, delete, update and find data 
