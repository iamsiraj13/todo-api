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


// update todo
exports.UpdateTodo=(req,res)=>{ 
 
  const {_id, TodoTitle,TodoDesc,updatedAt} = req.body; 
  const postBody = {
    TodoTitle:TodoTitle,
    TodoDesc:TodoDesc,
    TodoUpdateDate:Date.now()

  }
  TodoModle.updateOne({_id:_id},{$set:postBody},{upsert:true},(err,data)=>{
      if(err){
          res.status(400).json({status:"fail",data:err})
      }
      else {
          res.status(200).json({status:"success",data:data})
      }
  })
}

// update todo status
exports.UpdateTodoStatus=(req,res)=>{ 
 
  const {_id, TodoStatus} = req.body; 
  const postBody = {
    TodoStatus:TodoStatus, 
    TodoUpdateDate:Date.now()

  }
  TodoModle.updateOne({_id:_id},{$set:postBody},{upsert:true},(err,data)=>{
      if(err){
          res.status(400).json({status:"fail",data:err})
      }
      else {
          res.status(200).json({status:"success",data:data})
      }
  })
}

// Delete todo  
exports.DeleteTodo=(req,res)=>{ 
 
  const {_id} = req.body; 
 
  TodoModle.remove({_id:_id},(err,data)=>{
      if(err){
          res.status(400).json({status:"fail",data:err})
      }
      else {
          res.status(200).json({status:"Todo Delete Success",data:data})
      }
  })
}

 // select todo by status
exports.SelectTodoByStatus = (req, res) => {
  let username = req.headers["username"];
  const {TodoStatus} = req.body;


  TodoModle.find({ UserName: username ,TodoStatus:TodoStatus}, (error, data) => {

    if (error) {
      res.status(400).json({ status: "Fail" });
    } else {
      res
        .status(200)
        .json({ status: "Todo get success", data: data});
    }
  });
};
 // select todo by status
exports.SelectTodoByDate = (req, res) => {
  let username = req.headers["username"];
  const {FromDate, ToDate} = req.body;

  TodoModle.find({ UserName: username,TodoCreateDate:{$gte:new Date(FromDate),$lte:new Date(ToDate)}}, (error, data) => {

    if (error) {
      res.status(400).json({ status: "Fail" });
    } else {
      res
        .status(200)
        .json({ status: "Todo get success", data: data});
    }
  });
};

