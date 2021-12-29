const { getPromos } = require("./responsableRayon.controller")

const router = require("express").Router();

router.get("/getPromos", getPromos);

module.exports = router;