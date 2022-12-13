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
          species: 'dog',
          lastSeen: 'Norfolk, VA 23518, December 7, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Hercules',
          petImage: 'https://i.imgur.com/5bZIprk.jpeg',
          description: `Light brown coat with black nose, and a nice long curly tail. He's around 65 lbs`,
          sex: 'male',
          species: 'dog',
          lastSeen: 'Fairfax, VA 22032, December 3, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Blue',
          petImage: 'https://i.imgur.com/jRpCaQT.jpeg',
          description: `Bright blue eyes with a nice cream fur coat with black coated ears and face`,
          sex: 'female',
          species: 'cat',
          lastSeen: 'Washington, DC December 8, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Maxie',
          petImage: 'https://i.imgur.com/n6EhKh1.jpeg',
          description: `Mainly black all around with hints of brown on the ears and face.`,
          sex: 'female',
          species: 'dog',
          lastSeen: 'Laurel, MD 20707 December 2, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Shadow',
          petImage: 'https://i.imgur.com/0LINzxs.jpeg',
          description: `All black cat whose a little chunky with a black nose`,
          sex: 'male',
          species: 'cat',
          lastSeen: 'Hamilton, VA  20158 December 11, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Sadie',
          petImage: 'https://i.imgur.com/dgaCZdo.jpeg',
          description: `Adorable Pitbull whose really friendly with other humans/dogs. Brown eyes and a white strip going down belly.`,
          sex: 'female',
          species: 'dog',
          lastSeen: 'Fairfax, VA  22030 December 10, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Hammy',
          petImage: 'https://i.imgur.com/pqggrK0.jpeg',
          description: `Orange tabby cat, shorthair. Under his chin is white, he's about 10lbs. Very timid and scared of strangers. 2 years old`,
          sex: 'male',
          species: 'cat',
          lastSeen: 'Woodbridge, VA 22191 December 11, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Princess',
          petImage: 'https://i.imgur.com/A8eQsll.jpeg',
          description: `Only 4 months old. Light brown fur.`,
          sex: 'female',
          species: 'dog',
          lastSeen: 'Rockville, MD 20851 December 2, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Mufasa',
          petImage: 'https://i.imgur.com/aTOAdei.jpeg',
          description: `Siberian cat with all white belly side and all brown on the top of his body`,
          sex: 'female',
          species: 'cat',
          lastSeen: 'Washington, DC 20011 December 1, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Callie',
          petImage: 'https://i.imgur.com/rhjfEGr.jpeg',
          description: `Callie is a corgi mix whose around 10 years old. She has brown eyes, black nose and white/black/brown fur`,
          sex: 'female',
          species: 'dog',
          lastSeen: 'Dale City, VA 22193 December 1, 2022',
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
