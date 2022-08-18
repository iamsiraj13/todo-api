const TodoModle = require("../models/TodoModel");

 

// user registration
exports.CreateTodo = (req, res) => { 

  const username = req.headers.username;
  const {TodoTitle,TodoDesc}= req.body;
  const todoData = {
    UserName:username,
    TodoTitle:TodoTitle,
    TodoDesc:TodoDesc,
    TodoStatus:'New'
  }
  TodoModle.create(todoData, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {

      res.status(200).json({ status: "Todo Created", data });
    }
  });
};


// select todo
exports.SelectTodo = (req, res) => {
  let username = req.headers["username"];


  TodoModle.find({ UserName: username }, (error, data) => {
    if (error) {
      res.status(400).json({ status: "Fail" });
    } else {
      res
        .status(200)
        .json({ status: "Todo get success", data: data});
    }
  });
};