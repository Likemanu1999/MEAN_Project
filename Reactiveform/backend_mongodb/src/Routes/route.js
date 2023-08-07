const express = require("express")
const router = express.Router()
const UserController = require("../Controller/UserController")

router.post("/create",UserController.createUser)
router.get("/getData",UserController.getdata)
router.get("/getData/:userId",UserController.getUserById)
router.put("/updateUser/:userId",UserController.updateUser)
router.delete("/deleteUser/:userId",UserController.deleteUser)


module.exports = router