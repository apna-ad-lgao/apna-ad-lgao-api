// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alpha2code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isHidden: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    created: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updated: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});
  return Currency;
};
