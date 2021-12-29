const { getPromos , login } = require("./responsableRayon.controller")

const router = require("express").Router();

router.get("/getPromos", getPromos);
router.post("/login", login);

module.exports = router;