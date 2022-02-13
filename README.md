# BusinessReview

BusinessReview is a web application based on Yelp that allows people to review and rate local businesses.
***

GitHub https://github.com/srvorkap/BusinessReview

Live Link https://business-review-app.herokuapp.com/

WikiPage https://github.com/srvorkap/BusinessReview/wiki

Database Schema https://github.com/srvorkap/BusinessReview/wiki/Database-Schema

Backend - PostgreSQL, Sequelize, Express

Frontend - CSS, React, Redux

***

# Installation
This project can be run by following these steps:

1. Clone this repository
* ```https://github.com/srvorkap/BusinessReview```
2. Install dependencies from the root directory
* ```npm install```
3. Create user in PSQL with following command
* ```CREATE USER <username> WITH PASSWORD <'password'> CREATEDB```
4. Create a .env file in backend directory based on .env.example
5. Create database, tables and rows
* ```npx dotenv sequelize db:create```
* ```npx dotenv sequelize db:migrate```
* ```npx dotenv sequelize db:seed:all```
6. From backend directory
* ```npm start```
7. From frontend directory
* ```npm start```
