'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enum.init({
    status:{
      type:DataTypes.ENUM,
      values: ['pending', 'fulfilled', 'reject']
    } ,
    isDeleted: DataTypes.TINYINT,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Enum',
  });
  return Enum;
};