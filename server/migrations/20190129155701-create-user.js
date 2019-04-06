module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
				allowNull: false,
        type: Sequelize.STRING
      },
      email: {
				allowNull: false,
        type: Sequelize.STRING
      },
      password: {
				allowNull: false,
        type: Sequelize.STRING
      },
      mobile: {
				allowNull: false,
        type: Sequelize.STRING
      },
			notification: {
				type: Sequelize.STRING
			},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};