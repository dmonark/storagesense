module.exports = (sequelize, DataTypes) => {
  const stock = sequelize.define('stock', {
    name: {
			type: DataTypes.STRING,
			allowNull: false
		},
    qty: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
    type: {
			type: DataTypes.ENUM,
			allowNull: false,
			values: [
        'remove',
        'add',
      ],
			defaultValue: 'add'
		}
  });
  stock.associate = (models) => {
    stock.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return stock;
};