const Task = require("../models/Task");

const getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.task = task;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = getTask;
