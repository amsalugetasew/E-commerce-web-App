
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://gechsew:Gecho%401078@cluster0.ribx0.mongodb.net/?retryWrites=true&w=majority";
// const clients = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// clients.connect(err => {
//   const collection = client.db("Products").collection("Users");
//   // perform actions on the collection object
//   clients.close();
// });

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("Products");
        console.log(`Successfully connected to MongoDB, ${_db.databaseName}`); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};


// const mongoose = require('mongoose')

// const DB = 'mongodb+srv://<YOUR USERNAME>:<YOUR PASSWORD>@cluster0.zozv5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//      useUnifiedTopology: true,
// }).then(() =>{
//     console.log('Database connected..')
// })