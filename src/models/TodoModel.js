const mongoose = require("mongoose");

const DataScema = mongoose.Schema(
  {
    UserName: { type: String },
    TodoTitle: { type: String },
    TodoDesc: { type: String },
    TodoStatus: { type: String },
    TodoDate: { type: Date },
    TodoCreateDate: { type: Date },
  },
  { timestamps: true },
  {
    versionKey: false,
  }
);

const TodoModle = mongoose.model("Todo", DataScema);

module.exports = TodoModle;
