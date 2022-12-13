'use strict'
const falso = require('@ngneat/falso')
const { User, Listing, sequelize } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const comments = [...Array(5)].map((_) => {
      return {
        userId: falso.randNumber({ min: 1, max: 20 }),
        listingId: falso.randNumber({ min: 1, max: 20 }),
        comment: falso.randPhrase(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('comments', comments)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments')
  }
}
