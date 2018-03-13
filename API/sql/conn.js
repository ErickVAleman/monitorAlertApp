const Sequelize  =  require('sequelize');

const setup = config => {
    const sequelize =   new Sequelize(config);
    return sequelize
}

module.exports = setup;