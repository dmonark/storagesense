module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  user.associate = (models) => {
    user.hasMany(models.device, {
      foreignKey: 'userId',
      as: 'devices',
    });
    user.hasMany(models.stock, {
      foreignKey: 'userId',
      as: 'stocks',
    });
		user.hasMany(models.upload, {
      foreignKey: 'userId',
      as: 'uploads',
    });
  };
  return user;
};