const mongoose = require("mongoose");

const DataScema = mongoose.Schema(
  {
    UserName: { type: String },
    TodoTitle: { type: String },
    TodoDesc: { type: String },
    TodoStatus: { type: String },
    TodoCreateDate: { type: Date,default:Date.now() },
    TodoUpdateDate: { type: Date,default:Date.now() },
  },
  {
    versionKey: false,
  }
);

const TodoModle = mongoose.model("Todo", DataScema);

module.exports = TodoModle;
