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
    requireAuth,
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

router.patch(
    "/:id/edit",
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
            userId,
        });
        res.json(business);
    })
);

router.delete(
    "/:id",
    // requireAuth,
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const business = await Business.findByPk(+id);
        business.destroy();
        res.json({ id });
    })
);

module.exports = router;
