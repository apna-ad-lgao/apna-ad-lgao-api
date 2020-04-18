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
  return CampaignTags;
};
