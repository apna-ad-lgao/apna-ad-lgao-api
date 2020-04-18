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
    return UserDevice;
  };
  