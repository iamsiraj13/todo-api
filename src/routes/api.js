const express = require("express");
const {
  CreateProfile,
  UserLogin,
  SelectProfile,
  UpdateProfile,
} = require("../controllers/ProfileController");
const { CreateTodo, SelectTodo } = require("../controllers/TodoController");
const AuthVerify = require("../middleware/AuthVerify");
const router = express.Router();


router.post("/ProfileCreate", CreateProfile);
router.post("/UserLogin", UserLogin);

router.get("/SelectProfile",AuthVerify, SelectProfile);
router.post("/UpdateProfile",AuthVerify, UpdateProfile);

// create todo 
router.post('/CreateTodo',AuthVerify,CreateTodo)
router.get('/SelectTodo',AuthVerify,SelectTodo)

module.exports = router;
