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
          petImage: 'https://i.imgur.com/Q5vV8d4.jpeg',
          description: `Adorable Pitbull whose really friendly with other humans/dogs. Brown eyes and a white strip going down belly.`,
          sex: 'female',
          species: 'dog',
          lastSeen: 'Fairfax, VA  22030 December 10, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Hammy',
          petImage: 'https://i.imgur.com/dxNdstp.jpeg',
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
          petImage: 'https://i.imgur.com/bh4CGSG.jpeg',
          description: `Callie is a corgi mix whose around 10 years old. She has brown eyes, black nose and white/black/brown fur`,
          sex: 'female',
          species: 'dog',
          lastSeen: 'Dale City, VA 22193 December 1, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Rocky',
          petImage: 'https://i.imgur.com/ntEHgHy.jpeg',
          description: `Golden Retriever with a friendly demeanor. Loves playing fetch and going for long walks.`,
          sex: 'male',
          species: 'dog',
          lastSeen: 'Arlington, VA 22201, November 30, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Luna',
          petImage: 'https://i.imgur.com/p4SRb6K.jpeg',
          description: `Beautiful gray and white cat with green eyes. Has a playful and curious personality.`,
          sex: 'female',
          species: 'cat',
          lastSeen: 'Silver Spring, MD 20910, November 29, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Buddy',
          petImage: 'https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/05/Black-and-brown-dog-breeds-breeds.jpg',
          description: `Large mixed-breed dog with a brown and black coat. Has a gentle and loyal nature.`,
          sex: 'male',
          species: 'dog',
          lastSeen: 'Alexandria, VA 22304, November 28, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Coco',
          petImage: 'https://i0.wp.com/jpascual.scienceblog.com/files/2018/03/cat-794452_1920.jpg',
          description: `Calico cat with patches of black, orange, and white fur. Enjoys cuddling and napping.`,
          sex: 'female',
          species: 'cat',
          lastSeen: 'Bethesda, MD 20814, November 27, 2022',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Bella',
          petImage: 'https://www.trendingbreeds.com/wp-content/uploads/2021/12/White-and-black-Shih-Tzu-puppy.jpg',
          description: `Black and white Shih Tzu with a curly coat.`,
          sex: 'female',
          species: 'dog',
          lastSeen: 'Arlington, VA 22201, January 5, 2023',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Charlie',
          petImage: 'https://i.imgur.com/W6LMJ1r.jpeg',
          description: `White Samoyed with a friendly and playful demeanor.`,
          sex: 'male',
          species: 'dog',
          lastSeen: 'Alexandria, VA 22314, January 8, 2023',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Luna',
          petImage: 'https://i.imgur.com/TyeARiN.jpeg',
          description: `Tabby cat with white, brown, and black fur and a playful personality.`,
          sex: 'female',
          species: 'cat',
          lastSeen: 'Silver Spring, MD 20910, January 3, 2023',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Max',
          petImage: 'https://i.imgur.com/j7VSNND.jpeg',
          description: `1/2 German, 1/2 Australian Shepherd with a loyal nature.`,
          sex: 'male',
          species: 'dog',
          lastSeen: 'Bethesda, MD 20814, January 6, 2023',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Sophie',
          petImage: 'https://i.imgur.com/3FGaZzJ.jpeg',
          description: `White/brown Persian cat with blue eyes and a calm temperament.`,
          sex: 'female',
          species: 'cat',
          lastSeen: 'Reston, VA 20191, January 4, 2023',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          petName: 'Rocky',
          petImage: 'https://i.imgur.com/e8vKFK9.jpeg',
          description: `Brown and white Boxer with a playful and energetic personality.`,
          sex: 'male',
          species: 'dog',
          lastSeen: 'Gaithersburg, MD 20878, January 7, 2023',
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
