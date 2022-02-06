"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Businesses",
            [
                {
                    imageURL:
                        "https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    name: "Nature",
                    description: "It is beautiful",
                    address: "Somewhere",
                    city: "Fremont",
                    state: "CA",
                    zipCode: "94040",
                    phone: "5085243084",
                    hours: "11:00am - 5:00pm",
                    userId: 1,
                },
                {
                    imageURL:
                        "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
                    name: "Stairs",
                    description: "It is beautiful",
                    address: "Somewhere",
                    city: "Fremont",
                    state: "CA",
                    zipCode: "94040",
                    phone: "5085243084",
                    hours: "11:00am - 5:00pm",
                    userId: 2,
                },
                {
                    imageURL:
                        "https://media.istockphoto.com/photos/renewable-energy-and-sustainable-development-picture-id1186330948?k=20&m=1186330948&s=612x612&w=0&h=5aNPCcQ8FcZraX44PEhb2mqcHkow2xMITJMHdh28xNg=",
                    name: "Planet",
                    description: "It is beautiful",
                    address: "Somewhere",
                    city: "Fremont",
                    state: "CA",
                    zipCode: "94040",
                    phone: "5085243084",
                    hours: "11:00am - 5:00pm",
                    userId: 3,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Businesses', null, {});
    },
};
