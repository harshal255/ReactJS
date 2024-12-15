const express = require('express');
const route = express.Router();
const { addStudent, updateStudent, deleteStudent, getStudents, getStudentDetails } = require('../controllers/student.controller');

route.get("/student-lists", getStudents);
route.get("/student-details/:id", getStudentDetails);
route.post("/add-student", addStudent);
route.put("/update-student/:id", updateStudent);
route.delete("/delete-student/:id", deleteStudent);

module.exports = route;