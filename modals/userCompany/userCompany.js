module.exports = (sequelize, DataTypes) => {
    const UserCompany = sequelize.define('UserCompany', {
      userId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'User',
          key: 'id',
        },
        allowNull: false,
      },
      companyId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'Company',
          key: 'id',
        },
        allowNull: false,
      },
      isOwner: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      isMarketer: {
        type: DataTypes.NUMBER,
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
    return UserCompany;
  };
  