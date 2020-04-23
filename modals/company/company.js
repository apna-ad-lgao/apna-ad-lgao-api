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
      allowNull: true,
      defaultValue: 0,
    },
    longitude: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 0,
    },
    industryId: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    gst: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    angellist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    discord: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    google: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    justdial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pinterest: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slack: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tiktok: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    web: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    youtube: {
      type: DataTypes.STRING,
      allowNull: true,
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
