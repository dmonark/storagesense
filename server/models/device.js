module.exports = (sequelize, DataTypes) => {
  const device = sequelize.define('device', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    long: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  device.associate = (models) => {
    device.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
	
  return device;
};