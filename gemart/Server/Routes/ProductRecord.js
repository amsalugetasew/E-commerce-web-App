
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
const dbo = require("../conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


app.patch('/update/:id', async (req,res) => {
    let db_connect = dbo.getDb(); 
    const updatedPhone = await db_connect.collection("Users").findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
              updatedPhone
            }
          })
    }catch(err){
        console.log(err)
    }
  })
  


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb();
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
    // if(req.body.password === req.body.confirmPassword){
    var myobj = {
      firstName: req.body.Fname,
      lastName: req.body.Lname,
      email: req.body.email,
      password: req.body.password, 
    //   level: "req.body.level",
    };
    // db_connect.collection("Userss").insertOne(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     // db.close();
    //   });
    db_connect.collection("Users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
      console.log(res)
    });
//    }
//    else{
//      console.log("Password is not match")
//    }
   });

   module.exports = recordRoutes;