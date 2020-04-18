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
        allowNull: false,
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
    return UserCompany;
  };
  