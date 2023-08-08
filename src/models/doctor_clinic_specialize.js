'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor_Clinic_Specialize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor_Clinic_Specialize.init({
    doctorID: DataTypes.INTEGER,
    clinicID: DataTypes.INTEGER,
    specializeID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Doctor_Clinic_Specialize',
  });
  return Doctor_Clinic_Specialize;
};