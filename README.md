Task Manager Backend API Documentation
This repository contains the backend API for a Task Manager application built with Node.js, Express, and MongoDB. The API includes endpoints for managing tasks and user authentication.

Table of Contents
Technologies Used
Setup
Prerequisites
Installation
Environment Variables
API Endpoints
Tasks
Authentication
Models
Controllers
Routes
Error Handling
License
Technologies Used
Node.js
Express
MongoDB (with Mongoose)
bcryptjs (for password hashing)
dotenv (for environment variables)
cors (for Cross-Origin Resource Sharing)
Setup
Prerequisites
Make sure you have the following installed:

Node.js
npm (Node Package Manager) or yarn
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
cd <project-folder>
npm install
Environment Variables
Create a .env file in the root directory of your project and add the following environment variables:

dotenv
Copy code
PORT=5000
MONGODB_URI=your-mongodb-uri
Replace your-mongodb-uri with your MongoDB connection string.

API Endpoints
Tasks
GET /api/tasks/
Retrieves all tasks.
POST /api/tasks/
Creates a new task.
Request Body:
json
Copy code
{
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending",
  "dueDate": "2024-06-30",
  "priority": "medium"
}
PUT /api/tasks/
Updates an existing task.
Request Body (can include any or all of these fields):
json
Copy code
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "status": "completed",
  "dueDate": "2024-07-15",
  "priority": "high"
}
DELETE /api/tasks/
Deletes a task by ID.
Authentication
POST /api/auth/register

Registers a new user.
Request Body:
json
Copy code
{
  "username": "user123",
  "password": "password123"
}
POST /api/auth/login

Logs in a user.
Request Body:
json
Copy code
{
  "username": "user123",
  "password": "password123"
}
Models
Task Model
javascript
Copy code
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    dueDate: Date,
    priority: {
        type: String,
        enum: ['low', 'medium', 'high']
    }
});

module.exports = mongoose.model('Task', taskSchema);
User Model
javascript
Copy code
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
Controllers
taskController.js: Handles CRUD operations for tasks.
authController.js: Manages user registration and login.
Routes
taskRoutes.js: Defines API endpoints for tasks.
authRoutes.js: Defines API endpoints for authentication.
Error Handling
Errors are handled centrally using an error handling middleware (errorHandler.js) and specific error handling within controllers.

License
This project is licensed under the MIT License - see the LICENSE file for details.
