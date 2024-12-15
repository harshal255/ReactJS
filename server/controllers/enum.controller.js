const sequelize = require('sequelize');
const Enum = require('../models/index').sequelize.models.Enum;

const getEnums = async (req, res) => {
    try {
        const enums = await Enum.findAll({
            where: {
                isDeleted: {
                    [sequelize.Op.not]: 1
                }
            },
            attributes: ["id", "status"]
        });
        res.status(200).json({ message: "Welcome to Enum Operations..!", enums });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}

const addEnum = async (req, res) => {
    try {
        const _enum = await Enum.create({ ...req.body })
        console.log('enum was saved to the database!');
        res.status(200).json({ message: `${req.body.status} added successfully..!`, _enum });
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
}


module.exports = { getEnums, addEnum };