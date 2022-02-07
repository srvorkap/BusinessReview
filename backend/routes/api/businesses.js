const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { check, validationResult } = require("express-validator");
const { Business } = require("../../db/models");

const router = express.Router();

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const businesses = await Business.findAll();
        return res.json(businesses);
    })
);

router.post(
    "/",
    // requireAuth,
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
    })
);

module.exports = router;
