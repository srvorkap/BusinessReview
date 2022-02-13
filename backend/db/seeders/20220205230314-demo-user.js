"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Users",
            [
                {
                    email: "demo@user.io",
                    username: "Demo-lition",
                    hashedPassword: bcrypt.hashSync("password"),
                },
                {
                    email: "owner@owner.com",
                    username: "Owner",
                    hashedPassword: bcrypt.hashSync("passwordOwner"),
                },
                {
                    email: "1@1.com",
                    username: "Mary",
                    hashedPassword: bcrypt.hashSync("password1"),
                },
                {
                    email: "2@2.com",
                    username: "John",
                    hashedPassword: bcrypt.hashSync("password2"),
                },
                {
                    email: "3@3.com",
                    username: "James",
                    hashedPassword: bcrypt.hashSync("password3"),
                },
                {
                    email: "4@4.com",
                    username: "Emily",
                    hashedPassword: bcrypt.hashSync("password4"),
                },
                {
                    email: "5@5.com",
                    username: "Robert",
                    hashedPassword: bcrypt.hashSync("password5"),
                },
                {
                    email: "6@6.com",
                    username: "Anna",
                    hashedPassword: bcrypt.hashSync("password6"),
                },
                {
                    email: "7@7.com",
                    username: "Michael",
                    hashedPassword: bcrypt.hashSync("password7"),
                },
                {
                    email: "8@8.com",
                    username: "Susan",
                    hashedPassword: bcrypt.hashSync("password8"),
                },
                {
                    email: "9@9.com",
                    username: "David",
                    hashedPassword: bcrypt.hashSync("password9"),
                },
                {
                    email: "10@10.com",
                    username: "Lisa",
                    hashedPassword: bcrypt.hashSync("password10"),
                },
                {
                    email: "11@11.com",
                    username: "Marc",
                    hashedPassword: bcrypt.hashSync("password11"),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete("Users", null, {});
    },
};
