// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '',
    },
    isAdmin: {
      type: DataTypes.NUMBER,
      defaultValue: false,
      allowNull: true,
    },
    isPartner: {
      type: DataTypes.NUMBER,
      defaultValue: false,
      allowNull: true,
     },
    isHidden: {
      type: DataTypes.NUMBER,
      defaultValue: false,
      allowNull: true,
    },
    created: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    createdAt: 'created',
    updatedAt: 'updated',
    timestamps: false,
    freezeTableName: true,
  });
  return User;
};
  