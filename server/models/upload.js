module.exports = (sequelize, DataTypes) => {
  const upload = sequelize.define('upload', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    result: {
      type: DataTypes.STRING,
    }
  });
  upload.associate = function(models) {
    upload.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return upload;
};