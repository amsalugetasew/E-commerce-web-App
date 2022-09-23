const express = require("express");
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const multer = require("multer");
const path = require('path')
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../Database/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;



  // SET STORAGE
var storage = multer.diskStorage({
  destination:  (req, file, cb) =>{
    console.log(file)
    cb(null, 'Uploads')
  },
  filename:  (req, file, cb) =>{
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
    // cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })


recordRoutes.route("/uploads", upload.single('File')).post(function (req,res){
  res.send("Image is Uploaded")
})




recordRoutes.use(express.static(__dirname+"./public/"));

if(typeof localStorage === "undefined" || localStorage === null){
  const LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch')
}

var Storage = multer.diskStorage({
  destination: "./public/uploads",
  filename:(req,file,cb)=>{
    cb(null,file,fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});
var upload = multer({
  storage:Storage
}).single('file');

// GET home Page
recordRoutes.post('/upload', upload,function(req, res){
  var imageFile =req.file.filename;
  let db_connect = dbo.getDb("Products");
  var success = req.file.filename+ "Uploaded Successfully";
  var imageDetails = new db_connect.collection("Users")({
    imagename:imageFile
  });
  imageDetails.save(function(err,doc){
    if(err) throw err;
    ImageData.exec(function(err,data){
      if(err) throw err;
    });
  });
});

// recordRoutes.route("/upload-profile").post(upload,function (req, res) {
//   var imageFile =req.file.filename;
//   let db_connect = dbo.getDb("Products");
//   var success = req.file.filename+ "Uploaded Successfully";
//   var imageDetails = new db_connect.collection("Users")({
//     imagename:imageFile
//   });
//   imageDetails.save(function(err,doc){
//     if(err) throw err;
//     ImageData.exec(function(err,data){
//       if(err) throw err;
//     });
//   });
// }) 


recordRoutes.route("/uploads").get(function (req, res){
  console.log("Uploaded")
  res.status(200).json({
      seccess:"Success"
  });
});



  recordRoutes.route("/update/:id").patch(function (req, res) {
    // if (err) throw err;
    var db_connect = dbo.getDb(); 
    let MyId = { _id: ObjectId( req.params.id )};
    var newvalues = { $set: {firstName: req.body.Fname, lastName: req.body.Lname, email:req.body.email, address:req.body.Address, phone: req.body.Phone, password:req.body.password} };
    const updatedUser =  db_connect.collection("Users").updateOne(MyId, newvalues, function(err, res) {
      if (err) throw err;
      console.log(`1 document updated ${req.body.Fname}`);
    });
  }) 





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

// This section will help you get a list of all the records.
recordRoutes.route("/user").get(upload,function (req, res) {
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
recordRoutes.route("/users/add").post(upload,function (req, response) {
    let db_connect = dbo.getDb("Products");
    var myobj = {
      profile: req.body.profile,
      firstName: req.body.Fname,
      lastName: req.body.Lname,
      email: req.body.email,
      address: req.body.Address,
      phone: req.body.Phone,
      password: req.body.password, 
    };
    db_connect.collection("Users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   module.exports = recordRoutes;