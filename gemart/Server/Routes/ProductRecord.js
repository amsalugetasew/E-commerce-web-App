
const express = require("express");
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const Users = require('../Model/User')
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../Database/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;




// app.patch('/update/:id', async (req,res) => {
  recordRoutes.route("/update/:id").patch(function (req, res) {
    // if (err) throw err;
    var db_connect = dbo.getDb(); 
    let MyId = { _id: ObjectId( req.params.id )};
    var newvalues = { $set: {firstName: req.body.Fname, lastName: req.body.Lname, email:req.body.email, phone: req.body.Phone, password:req.body.password} };
    const updatedUser =  db_connect.collection("Users").updateOne(MyId, newvalues, function(err, res) {
      if (err) throw err;
      console.log(`1 document updated ${req.body.Fname}`);
      // try{
      //       res.json({
      //           status : 'Success',
      //           data : {
      //             updatedUser
      //           }
      //         })
      //         console.log(MyId)
      //   }catch(err){
      //       console.log(err)
      //   }
    });
    // console.log(users.collection)
    // const updatedUser =   db_connect.collection("Users").updateOne(MyId, req.body,
    //   function (err, docs) {
    // db_connect.collection("Users").findByIdAndUpdate(MyId, {$set:req.body},
    //                         function (err, docs) {
    // if (err){
    //     console.log(err)
    // }
    // else{
    //     console.log("Updated User : ", docs);
    // }
// });
    // const updatedUser =  db_connect.collection("Users").findByIdAndUpdate(MyId,req.body, {
    //   new:true,
    //   runValidators : true
    // });
    // try{
    //     res.status(200).json({
    //         status : 'Success',
    //         data : {
    //           updatedUser
    //         }
    //       })
    //       console.log(MyId)
    // }catch(err){
    //     console.log(err)
    // }
  })
  
// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  // db_connect
  //     .collection("Users")
    users
      .findOne({myquery}).toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
 });

 // This section will help you get a single record by id
recordRoutes.route("/fetch/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("Users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
 });

//  recordRoutes.get('/fetch/:id', (req, res) => {
//   var id = req.params.id.toString();
//   let db_connect = dbo.getDb();
//   if (!ObjectId.isValid(id)) {
//     console.log(id)
//       return res.status(404).send();
//   }
//   else{
//     console.log(id)
//   }
  

//   db_connect.collection("Users").findOne({_id:id}).then((user) => {
//       if (!user) {
//           return res.status(404).send();
//       }
//       console.log(user)
//       res.send({user});
//   }).catch(() => {
//       res.status(404).send();
//   });
// });
//  recordRoutes.get('/fetch/:id', async(req, res)=> {
  
//   try{
//     let db_connect = dbo.getDb();
//   const {id} = req.params;
//   const ids =`new ObjectId("${id}")`
//   console.log(ids)
//   const result = await db_connect.collection("Users").findById({_id:ids});
  
//   console.log(result._id);
//    res.status(201).json(result);
   
//   } catch (error) {
//       res.status(401).json(error);
//       console.log(error)
//     }

//   // try {
//   // let db_connect = dbo.getDb();
//   // const {id} = req.params;
//   // console.log(id)
//   // const result = await db_connect.collection("Users").findOne({_id:id});
//   //  res.status(201).json(result);
//   //  console.log(result);
//   // } catch (error) {
//   //   res.status(401).json(error);
//   //   console.log(error)
//   // }
// });
// // This section will help you get a list of all the records.
// recordRoutes.route(`/fetch/:id`).get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let fetchId = { _id: ObjectId( req.params.id )};
//   db_connect
//     .collection("Users")
//     .find({fetchId})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
      
//     });
//  });

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb();
    // let fetchId = { _id: ObjectId( req.params.id )};
    db_connect
      .collection("Users")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
    

    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect.collection("Users").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
   });


// This section will help you create a new record.
recordRoutes.route("/users/add").post(function (req, response) {
    let db_connect = dbo.getDb("Products");
    var myobj = {
      firstName: req.body.Fname,
      lastName: req.body.Lname,
      email: req.body.email,
      phone: req.body.Phone,
      password: req.body.password, 
    };
    db_connect.collection("Users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   module.exports = recordRoutes;