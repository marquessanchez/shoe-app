const sequelize = require('../config/connection');
const seedStore = require('./StoreData');
const seedShoes = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedStore();

  await seedShoes();

  process.exit(0);
};

seedAll();
