// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
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
    isParentCompany: {
      type: DataTypes.NUMBER,
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
    gst: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    angellist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discord: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    google: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    justdial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pinterest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tiktok: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    web: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    youtube: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.NUMBER,
      allowNull: true,
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
  return Company;
};
