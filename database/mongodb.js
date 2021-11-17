const { MongoClient, ObjectID } = require('mongodb');

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

function findAll (collection){
  return new Promise ((resolve, reject) => {
    MongoClient.connect(connectionString, (err, client) => {
      if (err) {
        console.log('Err', err);
        return reject(err);
      }

      const db = client.db('ecommerce-v');
    
      db.collection(collection).find({}).toArray().then(response => {
        console.log('Find all response', response);
        return resolve(response);
      })
    });
  })
}
function findOne (collection, id){
  return new Promise ((resolve, reject) => {
    MongoClient.connect(connectionString, (err, client) => {
      if (err) {
        console.log('Err', err);
        return reject(err);
      }

      const db = client.db('ecommerce-v');

      console.log(id);

      const objId = new ObjectID(id);
    
      db.collection(collection).findOne({_id: objId}).then(response => {
        console.log('Find One response', response);
        return resolve(response);
      })
    });
  })
}
function deleteOne (collection, id){
  return new Promise ((resolve, reject) => {
    MongoClient.connect(connectionString, (err, client) => {
      if (err) {
        console.log('Err', err);
        return reject(err);
      }

      const db = client.db('ecommerce-v');

      console.log(id);

      const objId = new ObjectID(id);
    
      db.collection(collection).remove({_id: objId}, { justOne: true }).then(response => {
        console.log('remove One response', response);
        return resolve(response);
      })
    });
  })
}



module.exports = {
  create,
  findAll,
  findOne,
  deleteOne
}


// create().then(response => {}).catch(error => {});



//create functions to create, delete, update and find data 
