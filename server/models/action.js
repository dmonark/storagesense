module.exports = (sequelize, DataTypes) => {
  const action = sequelize.define('action', {
    origin: {
			allowNull: false,
			type: DataTypes.ENUM,
			values: [
				'station',
				'app',
				'self'
			],
			defaultValue: 'station'
    },
     what: {
			allowNull: false,
			type: DataTypes.ENUM,
			values: [
				'temp',
				'moisture',
				'gas'
			],
			defaultValue: 'temp'
		},
    metadata: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  action.associate = function(models) {
    action.belongsTo(models.device, {
      foreignKey: 'deviceId',
      onDelete: 'CASCADE',
    });
  };
  return action;
};