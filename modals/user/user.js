module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
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
    }, {});
    return User;
  };
  