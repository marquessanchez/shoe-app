const User = require('./User');
const Store = require('./Store');
const Shoe = require('./Shoe');

Store.hasMany(Shoe, {
  foreignKey: 'store_id',
});

Shoe.belongsTo(Store, {
  foreignKey: 'store_id',
});

module.exports = { User, Store, Shoe };
