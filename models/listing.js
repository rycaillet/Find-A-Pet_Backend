'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Listing.init(
    {
      petName: DataTypes.STRING,
      petImage: DataTypes.STRING,
      description: DataTypes.STRING,
      sex: DataTypes.STRING,
      species: DataTypes.STRING,
      lastSeen: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Listing',
      tableName: 'listings'
    }
  )
  return Listing
}
