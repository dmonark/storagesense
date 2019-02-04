module.exports = (sequelize, DataTypes) => {
  const moisture = sequelize.define('moisture', {
    data: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  moisture.associate = (models) => {
    moisture.belongsTo(models.device, {
      foreignKey: 'deviceId',
      onDelete: 'CASCADE',
    });
  };
  return moisture;
};