
const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const businessesRouter = require('./businesses.js')
const reviewsRouter = require('./reviews')

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use('/businesses', businessesRouter)
router.use('/reviews', reviewsRouter)

module.exports = router;
