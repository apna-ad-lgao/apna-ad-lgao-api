// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    industryId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    mediaTypeId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    ainNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    facingFrom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    towardsTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sft: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    isLightning: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    isDigital: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    currencyId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    bookingStartDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingEndDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activeStartDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activeEndDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isHidden: {
      type: DataTypes.NUMBER,
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
  return Banner;
};
