const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  //   dueDate: Date,
  //   priority: {
  //     type: String,
  //     enum: ["low", "medium", "high"],
  //   },
});

module.exports = mongoose.model("Task", taskSchema);
