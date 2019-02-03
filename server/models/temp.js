module.exports = (sequelize, DataTypes) => {
  const temp = sequelize.define('temp', {
    data: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  temp.associate = (models) => {
    temp.belongsTo(models.device, {
      foreignKey: 'deviceId',
      onDelete: 'CASCADE',
    });
  };
  return temp;
};