const express = require("express");
const {
  CreateProfile,
  UserLogin,
  SelectProfile,
  UpdateProfile,
} = require("../controllers/ProfileController");
const { CreateTodo, SelectTodo, UpdateTodo, UpdateTodoStatus, DeleteTodo, SelectTodoByStatus } = require("../controllers/TodoController");
const AuthVerify = require("../middleware/AuthVerify");
const router = express.Router();


router.post("/ProfileCreate", CreateProfile);
router.post("/UserLogin", UserLogin);

router.get("/SelectProfile",AuthVerify, SelectProfile);
router.post("/UpdateProfile",AuthVerify, UpdateProfile);

// create todo 
router.post('/CreateTodo',AuthVerify,CreateTodo)
router.get('/SelectTodo',AuthVerify,SelectTodo)
router.post('/UpdateTodo',AuthVerify,UpdateTodo)
router.post('/UpdateTodoStatus',AuthVerify,UpdateTodoStatus)
router.post('/DeleteTodo',AuthVerify,DeleteTodo)
router.post('/SelectTodoByStatus',AuthVerify,SelectTodoByStatus)

module.exports = router;
