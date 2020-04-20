// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define('Tags', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isHidden: {
      type: DataTypes.NUMBER,
      defaultValue: false,
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    createdAt: 'created',
    updatedAt: 'updated',
    timestamps: true,
    freezeTableName: true,
  });
  return Tags ;
};
