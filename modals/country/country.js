// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alpha2code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alpha3code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isonumeric: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // createdAt: 'created',
    // updatedAt: 'updated',
    timestamps: false,
    freezeTableName: true,
  });
  return Country;
};
