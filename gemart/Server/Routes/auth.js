// Login Route 
var express=require("express");
const recordRoutes = express.Router();
const dbo = require("../Database/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/auth-after-loged").post(function (req, res) {
  // let db_connect = dbo.getDb();
  // var email = req.body.email;
  console.log('email')
  // db_connect.collection("Users").findOne({'email':email}).then((user) => {
  //     if (err) throw err;
  //     res.json(user);
  //     console.log(user.firstName)
  //   });
 });

recordRoutes.route("/login").post( function(req,res){
  let db_connect =dbo.getDb('Products');
  var email = req.body.email;
  var pass = req.body.password;
    db_connect.collection("Users").findOne({'email':email}).then((user) => {
      if (!user) {
          return res.status(404).send({ message: "User Not Found" });
      }
      // var decpassword= cryptr.decrypt(user.password)
      if(user && user.password === pass){
        res.send({user});
      }
      else{
        res.status(401).send();
      }
      
  }).catch(() => {
    res.status(401).send();
  });
});


module.exports = recordRoutes;