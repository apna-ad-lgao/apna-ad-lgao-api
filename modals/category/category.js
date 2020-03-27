// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
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
  return Category;
};
