const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(require("./Routes/ProductRoutes"));
app.use(require("./Routes/UserRoutes"));
app.use(require("./Routes/auth"))
app.use(require('./Routes/ContactRoutes'))
// app.use(require("./Routes/UserUpload"));
// const UserUpload = require('./Routes/UserUpload');
// app.use('/user', UserUpload);

// app.set("view engine", "ejs")
// app.get("/uploads", (req, res) =>{
//     console.log("Uploaded")
//     res.status(200).json({
//         seccess:"Success"
//     })
// })
// app.post("/uploads", (req,res)=>{
//     res.send("Image is Uploaded")
// })

const dbo = require("./Database/conn");


app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    // var dbo = db.db("mydb");
    // var myobj = { name: "Company Inc", address: "Highway 37" };
    // dbo.collection("customers").insertOne(myobj, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // });
    console.log(`Server is running on port: ${port}`);
});