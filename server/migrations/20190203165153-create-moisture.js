module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('moistures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
			deviceId: {
				type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'devices',
          key: 'id',
          as: 'deviceId',
        },
			},
    }),
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('moistures');
  }
};