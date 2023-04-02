const express = require("express")
const router = express.Router;
const controller =require("../cotroller/firstcointroller")

router.get("/info", controller)
router.get("/takeinfo", controller)
module.exports = router;

http://localhost:5000/maingateway/info
http://localhost:5000/maingateway/takeinfo