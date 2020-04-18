module.exports = (sequelize, DataTypes) => {
    const Device = sequelize.define('Device', {
      uuid: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      platform: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fingerprint: {
        type: DataTypes.STRING,
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
    return Device;
  };
  