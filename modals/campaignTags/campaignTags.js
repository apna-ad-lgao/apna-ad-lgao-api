// 'use strict';
module.exports = (sequelize, DataTypes) => {
  const CampaignTags = sequelize.define('CampaignTags', {
    campaignId: {
      type: DataTypes.NUMBER,
      references: {
        model: 'Campaign',
        key: 'id',
      },
    },
    tagsId: {
      type: DataTypes.NUMBER,
      references: {
        model: 'Tags',
        key: 'id',
      },
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
  return CampaignTags;
};
