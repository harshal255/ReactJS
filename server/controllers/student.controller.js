const sequelize = require('sequelize');
const Student = require('../models/index').sequelize.models.Student;

const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll({
            where: {
                isDeleted: {
                    [sequelize.Op.not]: 1
                }
            },
            attributes: ["id", "name", "email", "username", "password"]
        });
        res.status(200).json({ message: "Welcome to CRUD Operations..!", students });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const addStudent = async (req, res) => {
    try {
        const student = await Student.create({ ...req.body })
        console.log('student was saved to the database!');
        res.status(200).json({ message: `${req.body.name} added successfully..!`, student });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(+req.params.id);
        if (student === null) {
            res.status(200).json({ message: "Student doesn't exists..!" })
        }
        else {
            student.set({ ...student, ...req.body });
            await student.save();
            res.status(200).json({ message: `${student.name} updated Successfully...!`, student });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(+req.params.id);
        if (student === null) {
            res.status(200).json({ message: "Student doesn't exists..!" })
        }
        else {
            student.set({ ...student, isDeleted: 1, deletedAt: new Date() });
            await student.save();
            res.status(200).json({ message: `${student.name} deleted Successfully...!`, student });
        }
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const getStudentDetails = async (req, res) => {
    try {
        const studentDetails = await Student.findOne({
            where: {
                id: +req.params.id,
                isDeleted: {
                    [sequelize.Op.not]: 1
                }
            },
            attributes: ["id", "name", "email", "username", "password"]
        });
        if (studentDetails === null) {
            return res.status(200).json({ message: "Student doesn't exists..!" })
        }
        res.status(200).json(studentDetails);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}
module.exports = { getStudents, addStudent, updateStudent, deleteStudent, getStudentDetails };