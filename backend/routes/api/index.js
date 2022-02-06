
const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const businessesRouter = require('./businesses.js')

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use('/businesses', businessesRouter)

module.exports = router;
