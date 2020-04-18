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
    return Address;
  };
  