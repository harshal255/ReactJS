'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "John Doe",
        email: "johndoe@example.com",
        username: "johndoe123",
        password: "password123", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        email: "janesmith@example.com",
        username: "janesmith456",
        password: "password456", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mike Johnson",
        email: "mikejohnson@example.com",
        username: "mikejohnson789",
        password: "password789", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Emily Davis",
        email: "emilydavis@example.com",
        username: "emilydavis012",
        password: "password012", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chris Wilson",
        email: "chriswilson@example.com",
        username: "chriswilson345",
        password: "password345", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sarah Thompson",
        email: "sarahthompson@example.com",
        username: "sarahthompson678",
        password: "password678", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "David Anderson",
        email: "davidanderson@example.com",
        username: "davidanderson901",
        password: "password901", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jessica Martinez",
        email: "jessicamartinez@example.com",
        username: "jessicamartinez234",
        password: "password234", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Andrew Taylor",
        email: "andrewtaylor@example.com",
        username: "andrewtaylor567",
        password: "password567", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lauren Thomas",
        email: "laurenthomas@example.com",
        username: "laurenthomas890",
        password: "password890", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kevin Hernandez",
        email: "kevinhernandez@example.com",
        username: "kevinhernandez123",
        password: "password123", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Amanda Walker",
        email: "amandawalker@example.com",
        username: "amandawalker456",
        password: "password456", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jason Lewis",
        email: "jasonlewis@example.com",
        username: "jasonlewis789",
        password: "password789", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Megan Hall",
        email: "meganhall@example.com",
        username: "meganhall012",
        password: "password012", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ryan Young",
        email: "ryanyoung@example.com",
        username: "ryanyoung345",
        password: "password345", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stephanie Allen",
        email: "stephanieallen@example.com",
        username: "stephanieallen678",
        password: "password678", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Daniel Green",
        email: "danielgreen@example.com",
        username: "danielgreen901",
        password: "password901", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Olivia Baker",
        email: "oliviabaker@example.com",
        username: "oliviabaker234",
        password: "password234", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Michael King",
        email: "michaelking@example.com",
        username: "michaelking567",
        password: "password567", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samantha Wright",
        email: "samanthawright@example.com",
        username: "samanthawright890",
        password: "password890", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Matthew Lopez",
        email: "matthewlopez@example.com",
        username: "matthewlopez123",
        password: "password123", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ashley Hill",
        email: "ashleyhill@example.com",
        username: "ashleyhill456",
        password: "password456", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Christopher Scott",
        email: "christopherscott@example.com",
        username: "christopherscott789",
        password: "password789", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Taylor Green",
        email: "taylorgreen@example.com",
        username: "taylorgreen012",
        password: "password012", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alexis Adams",
        email: "alexisadams@example.com",
        username: "alexisadams345",
        password: "password345", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joshua Mitchell",
        email: "joshuamitchell@example.com",
        username: "joshuamitchell678",
        password: "password678", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alyssa Nelson",
        email: "alyssanelson@example.com",
        username: "alyssanelson901",
        password: "password901", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Brandon Roberts",
        email: "brandonroberts@example.com",
        username: "brandonroberts234",
        password: "password234", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kayla Turner",
        email: "kaylaturner@example.com",
        username: "kaylaturner567",
        password: "password567", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Justin Phillips",
        email: "justinphillips@example.com",
        username: "justinphillips890",
        password: "password890", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Natalie Campbell",
        email: "nataliecampbell@example.com",
        username: "nataliecampbell123",
        password: "password123", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Benjamin Parker",
        email: "benjaminparker@example.com",
        username: "benjaminparker456",
        password: "password456", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hannah Evans",
        email: "hannahevans@example.com",
        username: "hannahevans789",
        password: "password789", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tyler Martinez",
        email: "tylermartinez@example.com",
        username: "tylermartinez012",
        password: "password012", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Victoria Hill",
        email: "victoriahill@example.com",
        username: "victoriahill345",
        password: "password345", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kyle Bell",
        email: "kylebell@example.com",
        username: "kylebell678",
        password: "password678", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maria Reed",
        email: "mariareed@example.com",
        username: "mariareed901",
        password: "password901", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Scott Cooper",
        email: "scottcooper@example.com",
        username: "scottcooper234",
        password: "password234", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gabriella Rivera",
        email: "gabriellarivera@example.com",
        username: "gabriellarivera567",
        password: "password567", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Caleb Ward",
        email: "calebward@example.com",
        username: "calebward890",
        password: "password890", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lily Cox",
        email: "lilycox@example.com",
        username: "lilycox123",
        password: "password123", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dylan Ross",
        email: "dylanross@example.com",
        username: "dylanross456",
        password: "password456", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Grace Powell",
        email: "gracepowell@example.com",
        username: "gracepowell789",
        password: "password789", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Owen Long",
        email: "owenlong@example.com",
        username: "owenlong012",
        password: "password012", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sophia Murphy",
        email: "sophiamurphy@example.com",
        username: "sophiamurphy345",
        password: "password345", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ethan Wright",
        email: "ethanwright@example.com",
        username: "ethanwright678",
        password: "password678", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Isabella Foster",
        email: "isabellafoster@example.com",
        username: "isabellafoster901",
        password: "password901", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nathan Kelly",
        email: "nathankelly@example.com",
        username: "nathankelly234",
        password: "password234", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Madison Simmons",
        email: "madisonsimmons@example.com",
        username: "madisonsimmons567",
        password: "password567", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "James Hughes",
        email: "jameshughes@example.com",
        username: "jameshughes890",
        password: "password890", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chloe Price",
        email: "chloeprice@example.com",
        username: "chloeprice123",
        password: "password123", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Logan Nelson",
        email: "logannelson@example.com",
        username: "logannelson456",
        password: "password456", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zoe Watson",
        email: "zoewatson@example.com",
        username: "zoewatson789",
        password: "password789", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Christian Brooks",
        email: "christianbrooks@example.com",
        username: "christianbrooks012",
        password: "password012", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ava Howard",
        email: "avahoward@example.com",
        username: "avahoward345",
        password: "password345", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aaron Wright",
        email: "aaronwright@example.com",
        username: "aaronwright678",
        password: "password678", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Emma Coleman",
        email: "emmacoleman@example.com",
        username: "emmacoleman901",
        password: "password901", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Christopher Lee",
        email: "christopherlee@example.com",
        username: "christopherlee234",
        password: "password234", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Grace Perez",
        email: "graceperez@example.com",
        username: "graceperez567",
        password: "password567", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "David Turner",
        email: "davidturner@example.com",
        username: "davidturner890",
        password: "password890", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Avery Ward",
        email: "averyward@example.com",
        username: "averyward123",
        password: "password123", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sofia Cox",
        email: "sofiacox@example.com",
        username: "sofiacox456",
        password: "password456", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joseph Mitchell",
        email: "josephmitchell@example.com",
        username: "josephmitchell789",
        password: "password789", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Olivia Sanders",
        email: "oliviasanders@example.com",
        username: "oliviasanders012",
        password: "password012", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Andrew Reed",
        email: "andrewreed@example.com",
        username: "andrewreed345",
        password: "password345", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Abigail Hill",
        email: "abigailhill@example.com",
        username: "abigailhill678",
        password: "password678", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elijah Price",
        email: "elijahprice@example.com",
        username: "elijahprice901",
        password: "password901", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Elizabeth Murphy",
        email: "elizabethmurphy@example.com",
        username: "elizabethmurphy234",
        password: "password234", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samuel Kelly",
        email: "samuelkelly@example.com",
        username: "samuelkelly567",
        password: "password567", createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Avery Simmons",
        email: "averysimmons@example.com",
        username: "averysimmons890",
        password: "password890", createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
