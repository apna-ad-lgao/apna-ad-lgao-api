// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Industry = sequelize.define('Industry', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyVerticalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
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
  }, {
    createdAt: 'created',
    updatedAt: 'updated',
    timestamps: false,
    freezeTableName: true,
  });
  return Industry;
};
