"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Reviews",
            [
                {
                    rating: 5,
                    content: "user 1 business 2 rating 5",
                    userId: 1,
                    businessId: 2,
                },
                {
                    rating: 4,
                    content: "user 1 business 2 rating 4",
                    userId: 1,
                    businessId: 2,
                },
                {
                    rating: 3,
                    content: "user 1 business 3 rating 3",
                    userId: 1,
                    businessId: 3,
                },
                {
                    rating: 2,
                    content: "user 2 business 1 rating 2",
                    userId: 2,
                    businessId: 1,
                },
                {
                    rating: 1,
                    content: "user 2 business 3 rating 1",
                    userId: 2,
                    businessId: 3,
                },
                {
                    rating: 5,
                    content: "user 2 business 3 rating 5",
                    userId: 2,
                    businessId: 3,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Reviews", null, {});
    },
};
