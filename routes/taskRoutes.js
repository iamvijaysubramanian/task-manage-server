const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const getTask = require("../middleware/getTask");

router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/:id", getTask, updateTask);
router.delete("/:id", getTask, deleteTask);

module.exports = router;
