const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { check, validationResult } = require("express-validator");

const { Review, User } = require("../../db/models");

const router = express.Router();

const reviewValidator = [
    check("rating")
        .exists({ checkFalsy: true })
        .withMessage("Please select your rating.")
        .isLength({max: 1})
        .withMessage("Please select your rating."),
    check("content")
        .exists({ checkFalsy: true })
        .withMessage("Please write a review.")
];

router.get(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
        const reviews = await Review.findAll({
            include: User
        });
        res.json(reviews);
    })
);

router.post(
    "/",
    requireAuth,
    reviewValidator,
    asyncHandler(async (req, res) => {
        const { rating, content, userId, businessId } = req.body;
        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            const review = Review.build({
                rating,
                content,
                userId,
                businessId,
            });
            await review.save();
            res.json(review);
        } else {
            const errors = validatorErrors.array().map(err => err.msg);
            res.json({
                errors,
            });
        }
    })
);

router.patch(
    "/:id/edit",
    requireAuth,
    reviewValidator,
    asyncHandler(async (req, res) => {
        const { rating, content } = req.body;

        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            const { id } = req.params;
            const review = await Review.findByPk(+id);
            await review.update({
                rating,
                content,
            });
            res.json(review);
        } else {
            const errors = validatorErrors.array().map(err => err.msg);
            res.json({
                errors,
            });
        }
    })
);

router.delete(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
        const { id } = req.body;
        const review = await Review.findByPk(+id);
        review.destroy();
        res.json({ id })
    })
);

module.exports = router;
