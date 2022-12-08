'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'listings',
      [
        {
          petName: 'Millie',
          petImage: 'https://i.imgur.com/JhLkIZH.jpeg',
          description: `All black lab mix that's around 80 lbs, has a white spot on his back left leg.`,
          sex: 'male',
          species: 'labrador mix',
          lastSeen: 'Norfolk, VA 23518, December 7, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Hercules',
          petImage: 'https://i.imgur.com/5bZIprk.jpeg',
          description: `Light brown coat with black nose, and a nice long curly tail. He's around 65 lbs`,
          sex: 'male',
          species: 'Danish Broholmer',
          lastSeen: 'Fairfax, VA 22032, December 3, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Blue',
          petImage: 'https://i.imgur.com/jRpCaQT.jpeg',
          description: `Bright blue eyes with a nice cream fur coat with black coated ears and face`,
          sex: 'female',
          species: 'Himalayan',
          lastSeen: 'Washington, DC December 8, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Honey',
          petImage: 'https://i.imgur.com/ujzb8cl.jpeg',
          description: `Small light brown mongolian gerbil with a light pink nose and a long tail`,
          sex: 'female',
          species: 'Mongolian',
          lastSeen: 'Laurel, MD 20707 December 2, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('listings', null, {})
  }
}
