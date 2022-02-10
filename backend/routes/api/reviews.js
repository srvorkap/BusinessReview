const express = require('express')
const asyncHandler = require('express-async-handler')
const { requireAuth } = require('../../utils/auth')
const { check, validationResult } = require('express-validator')

const { Review } = require('../../db/models')

const router = express.Router()

const reviewValidator = [
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage('Please rate this business.'),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please write a review.')
        .isLength({ min: 2})
        .withMessage('Please add more details so we can post this review.')
]

router.get('/', asyncHandler(async (req, res) => {
    const reviews = await Review.findAll()
    res.json(reviews)
}))

router.post('/', asyncHandler(async (req, res) => {
    const {
        rating,
        content,
        userId,
        businessId
    } = req.body
    const validatorErrors = validationResult(req)
    if (validatorErrors.isEmpty()) {
        const review = Review.build({
            rating,
            content,
            userId,
            businessId
        })
        await review.save()
        res.json(review)
    } else {
        const errors = validatorErrors.array().map(err => err.msg);
        res.json({
            errors
        })
    }
}))





module.exports = router
