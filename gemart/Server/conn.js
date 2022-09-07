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
        console.log("Successfully connected to MongoDB, Products"); 
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