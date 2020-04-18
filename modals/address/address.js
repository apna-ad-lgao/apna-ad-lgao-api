module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      building: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      landmark: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pincode: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      stateId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      isAdmin: {
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
    return Address;
  };
  