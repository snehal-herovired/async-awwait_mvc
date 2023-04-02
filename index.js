// // express server
// const express = require("express")
// const app = express();

// app.use(express.json());


// //request
// app.get("/info", (req,res) => {
//     res.json({
//         message:"get rquest workking"
//     })
// })
const router =require("./routes/routehandle")
app.use("/firstrntrypointtorouter",router)

// // http://locahost:5000/signup
// app.post("/signup", (req, res) => {
//     //client will send some data on this api;
//     // client is sending email and username to this api;

//     let email = req.body.email;
//     let username = req.body.username;
//     res.json({
//         message: "data recieved successfully",
//         email: email,
//         username:username
//     })
// })



// app.listen(5000, () => {
//     console.log("server listening on port 5000");
// })


//Promises :pending,resolved and reject;




// callback : function as an args to another function

//async -await
// they can handle promise


// let p1 = Promise.resolve("6")
// console.log(p1);

// p1
// /
// fetch('https://dummyjso.com/products')
// .then(res => res.json())
// .then(console.log)
// .catch ((err) => {
//     console.log(err);
// })

// signup username, email and password
// password to hbge stored in db in ecryptted .
// brcypt : hasing method based on callback and promise
async function callme(req, res) {
    let saltround = 6;
    let email = req.body.email;
    let password = req.body.password;
    // main logic
    //define  promisified activity here or nnot
  let encrptedpass =await   bcrypt.hash(myPlaintextPassword, saltRounds);
}