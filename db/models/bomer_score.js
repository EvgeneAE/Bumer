'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bomer_score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bomer_score.init(
    {
      Username: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Scores: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Bomer_score',
    }
  );
  return Bomer_score;
};
