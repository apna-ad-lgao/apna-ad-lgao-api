module.exports = (sequelize, DataTypes) => {
    const UserDevice = sequelize.define('UserDevice', {
      userId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'User',
          key: 'id',
        },
        allowNull: false,
      },
      deviceId: {
        type: DataTypes.NUMBER,
        references: {
          model: 'Device',
          key: 'id',
        },
        allowNull: false,
      },
      isHidden: {
        type: DataTypes.NUMBER,
        allowNull: false,
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
    return UserDevice;
  };
  