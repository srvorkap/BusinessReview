const express = require('express')
const asyncHandler = require('express-async-handler')
const { requireAuth } = require('../../utils/auth')
const { check, validationResult } = require('express-validator')

const { Review } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll()
    res.json(reviews)
}))





module.exports = router
