module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('actions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin: {
				allowNull: false,
        type: Sequelize.ENUM,
				values: [
          'station',
          'app',
					'self'
        ],
        defaultValue: 'station'
      },
      what: {
				allowNull: false,
        type: Sequelize.ENUM,
				values: [
          'temp',
          'moisture',
					'gas'
        ],
        defaultValue: 'temp'
      },
      metadata: {
				allowNull: false,
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
      }
    }),
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('actions');
  }
};