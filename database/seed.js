const faker = require('faker');
const {saveNewSystem} = require('./system_model.js');

const seedSystems = async () => {
  try {
    const systemLimit = 100;
    const systems = [];
    const os_names = ['Windows', 'Linux', 'Mac', 'Steam'];

    for (let i = 1; i <= systemLimit; i++) {
      let newSystem = {
        minimum: [
          {
            name: os_names[0],
            os: `${os_names[0] + ' ' + faker.random.number()}`,
            processor: `${faker.company.companyName() + ' ' + faker.random.number()}`,
            memory: `${faker.random.number() + ' ' + 'GB RAM'}`,
            storage: `${faker.random.number() + ' ' + 'GB'}`,
            graphics: `${faker.vehicle.manufacturer() + ' ' + faker.random.number()}`
          },
          {
            name: os_names[1],
            os: `${os_names[1] + ' ' + faker.random.number()}`,
            processor: `${faker.company.companyName() + ' ' + faker.random.number()}`,
            memory: `${faker.random.number() + ' ' + 'GB RAM'}`,
            storage: `${faker.random.number() + ' ' + 'GB'}`,
            graphics: `${faker.vehicle.manufacturer() + ' ' + faker.random.number()}`
          },
          {
            name: os_names[2],
            os: `${os_names[2] + ' ' + faker.random.number()}`,
            processor: `${faker.company.companyName() + ' ' + faker.random.number()}`,
            memory: `${faker.random.number() + ' ' + 'GB RAM'}`,
            storage: `${faker.random.number() + ' ' + 'GB'}`,
            graphics: `${faker.vehicle.manufacturer() + ' ' + faker.random.number()}`
          },
          {
            name: os_names[3],
            os: `${os_names[3] + ' ' + faker.random.number()}`,
            processor: `${faker.company.companyName() + ' ' + faker.random.number()}`,
            memory: `${faker.random.number() + ' ' + 'GB RAM'}`,
            storage: `${faker.random.number() + ' ' + 'GB'}`,
            graphics: `${faker.vehicle.manufacturer() + ' ' + faker.random.number()}`
          },
        ],
        recommended: [
          {
            name: os_names[0],
            os: `${os_names[0] + ' ' + faker.random.number()}`,
            processor: `${faker.company.companyName() + ' ' + faker.random.number()}`,
            memory: `${faker.random.number() + ' ' + 'GB RAM'}`,
            storage: `${faker.random.number() + ' ' + 'GB'}`,
            graphics: `${faker.vehicle.manufacturer() + ' ' + faker.random.number()}`
          },
          {
            name: os_names[1],
            os: `${os_names[1] + ' ' + faker.random.number()}`,
            processor: `${faker.company.companyName() + ' ' + faker.random.number()}`,
            memory: `${faker.random.number() + ' ' + 'GB RAM'}`,
            storage: `${faker.random.number() + ' ' + 'GB'}`,
            graphics: `${faker.vehicle.manufacturer() + ' ' + faker.random.number()}`
          },
          {
            name: os_names[2],
            os: `${os_names[2] + ' ' + faker.random.number()}`,
            processor: `${faker.company.companyName() + ' ' + faker.random.number()}`,
            memory: `${faker.random.number() + ' ' + 'GB RAM'}`,
            storage: `${faker.random.number() + ' ' + 'GB'}`,
            graphics: `${faker.vehicle.manufacturer() + ' ' + faker.random.number()}`
          },
          {
            name: os_names[3],
            os: `${os_names[3] + ' ' + faker.random.number()}`,
            processor: `${faker.company.companyName() + ' ' + faker.random.number()}`,
            memory: `${faker.random.number() + ' ' + 'GB RAM'}`,
            storage: `${faker.random.number() + ' ' + 'GB'}`,
            graphics: `${faker.vehicle.manufacturer() + ' ' + faker.random.number()}`
          },
        ]
      };
      systems.push(saveNewSystem(newSystem));
    }
  } catch (err) {
    console.error(err);
  }
};

seedSystems();

module.exports = seedSystems;