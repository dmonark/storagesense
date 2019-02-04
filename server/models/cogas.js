module.exports = (sequelize, DataTypes) => {
  const cogas = sequelize.define('cogas', {
    data: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  cogas.associate = (models) => {
    cogas.belongsTo(models.device, {
      foreignKey: 'deviceId',
      onDelete: 'CASCADE',
    });
  };
  return cogas;
};