const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { check, validationResult } = require("express-validator");
const { Business, Review } = require("../../db/models");

const router = express.Router();

const businessValidator = [
    check("imageURL")
        .exists({ checkFalsy: true })
        .withMessage("Please provide an image for your business."),
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name for your business."),
    check("description")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a description for your business."),
    check("address")
        .exists({ checkFalsy: true })
        .withMessage("Please provide an address for your business."),
    check("city")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a city name."),
    check("state"),
    check("zipCode")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a zip code."),
    check("phone")
        .exists({ checkFalsy: true })
        .withMessage("Please provide your business phone number."),
    check("hours")
        .exists({ checkFalsy: true })
        .withMessage("Please provide your business hours."),
];

router.get(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
        const businesses = await Business.findAll();
        return res.json(businesses);
    })
);

router.post(
    "/",
    requireAuth,
    businessValidator,
    asyncHandler(async (req, res) => {
        const {
            imageURL,
            name,
            description,
            address,
            city,
            state,
            zipCode,
            phone,
            hours,
            userId,
        } = req.body;

        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            const business = Business.build({
                imageURL,
                name,
                description,
                address,
                city,
                state,
                zipCode,
                phone,
                hours,
                userId,
            });
            await business.save();
            res.json(business);
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
    businessValidator,
    asyncHandler(async (req, res) => {
        const {
            imageURL,
            name,
            description,
            address,
            city,
            state,
            zipCode,
            phone,
            hours,
            // userId,
        } = req.body;

        const validatorErrors = validationResult(req)
        if (validatorErrors.isEmpty()) {
            const { id } = req.params;
            const business = await Business.findByPk(+id);
            await business.update({
                imageURL,
                name,
                description,
                address,
                city,
                state,
                zipCode,
                phone,
                hours,
                // userId,
            });
            res.json(business);
        } else {
            const errors = validatorErrors.array().map(err => err.msg);
            res.json({
                errors
            })
        }

    })
);

router.delete(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
        const { id } = req.body;
        const business = await Business.findByPk(+id)
        await business.destroy()
        res.json({ id });
    })
);

module.exports = router;
