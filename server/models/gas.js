module.exports = (sequelize, DataTypes) => {
  const gas = sequelize.define('gas', {
    data: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'gases'
  });
  gas.associate = (models) => {
    gas.belongsTo(models.device, {
      foreignKey: 'deviceId',
      onDelete: 'CASCADE',
    });
  };
  return gas;
};