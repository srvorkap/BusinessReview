"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Businesses", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            imageURL: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            state: {
                type: Sequelize.STRING(50),
            },
            zipCode: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            hours: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "Users" },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"), // default date
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"), // default date
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Businesses");
    },
};
