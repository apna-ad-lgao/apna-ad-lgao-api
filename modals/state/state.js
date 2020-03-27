// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    loccode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
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
  return State;
};
