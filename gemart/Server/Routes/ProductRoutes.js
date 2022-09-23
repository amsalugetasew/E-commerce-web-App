const express = require("express");
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../Database/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


  recordRoutes.route("/product/update/:id").patch(function (req, res) {
    // if (err) throw err;
    var db_connect = dbo.getDb(); 
    let MyId = { _id: ObjectId( req.params.id )};
    var newvalues = { $set: {profile: req.body.profile,title: req.body.title, catagory: req.body.catagory, price:req.body.price, rate:req.body.rate, count:req.body.count, description: req.body.description} };
    db_connect.collection("Product").updateOne(MyId, newvalues, function(err, res) {
      if (err) throw err;
      console.log(`1 document updated ${req.body.title}`);
    });
  }) 


 // This section will help you get a single record by id
recordRoutes.route("/fetch/product/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Product")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
 });

// This section will help you get a list of all the records.
recordRoutes.route("/product").get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect
      .collection("Product")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

// This section will help you delete a record
recordRoutes.route("/product/:id").delete((req, response) => { 
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("Product").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
   });


// This section will help you create a new record.
recordRoutes.route("/product/add").post(function (req, response) {
    let db_connect = dbo.getDb("Products");
    var myobj = {
      profile: req.body.image,
      profile: req.body.profile,
      title: req.body.title,
      catagory: req.body.catagory,
      price: req.body.price,
      rate: req.body.rate,
      count: req.body.count,
      description: req.body.description, 
    };
    db_connect.collection("Product").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   module.exports = recordRoutes;