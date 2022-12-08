'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    static associate(models) {
      Listing.hasMany(models.Comment, {
        foreignKey: 'listingId',
        as: 'listing_comment',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
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
