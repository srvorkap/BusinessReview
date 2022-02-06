"use strict";
module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define(
        "Business",
        {
            imageURL: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING(50),
            },
            description: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            address: {
                allowNull: false,
                type: DataTypes.STRING(50),
            },
            city: {
                allowNull: false,
                type: DataTypes.STRING(50),
            },
            state: {
                type: DataTypes.STRING(50),
            },
            zipCode: {
                allowNull: false,
                type: DataTypes.STRING(50),
            },
            phone: {
                allowNull: false,
                type: DataTypes.STRING(50),
            },
            hours: {
                allowNull: false,
                type: DataTypes.STRING(50),
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: { model: "Users" },
            },
        },
        {}
    );
    Business.associate = function (models) {
      Business.belongsTo(models.User, { foreignKey: 'userId' })
      Business.hasMany(models.Review, { foreignKey: 'businessId'})
    };
    return Business;
};
