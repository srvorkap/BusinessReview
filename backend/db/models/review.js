'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" },
    },
    businessId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Businesses" },
    },
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Business, { foreignKey: 'businessId' })
  };
  return Review;
};
