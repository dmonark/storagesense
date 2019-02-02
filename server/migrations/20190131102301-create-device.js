module.exports = {
  up: (queryInterface, Sequelize) => 
		queryInterface.createTable('devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
				allowNull: false,
      },
      lan: {
        type: Sequelize.STRING,
				allowNull: false,
      },
      long: {
        type: Sequelize.STRING,
				allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
				allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
			userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'userId',
        },
      },
  }),
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('devices');
  }
};