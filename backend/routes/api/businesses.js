const express = require('express')
const asyncHandler = require('express-async-handler')
const { requireAuth } = require('../../utils/auth')
const { check, validationResult } = require('express-validator')
const { Business } = require('../../db/models')

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const businesses = await Business.findAll()
    return res.json(businesses)
}))

// router.get('/', (req, res) => {
//     re
// })







module.exports = router
