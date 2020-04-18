module.exports = (sequelize, DataTypes) => {
    const OrderHistory = sequelize.define('OrderHistory', {
      total: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fromDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      bannerId: {
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
    return OrderHistory;
  };
  