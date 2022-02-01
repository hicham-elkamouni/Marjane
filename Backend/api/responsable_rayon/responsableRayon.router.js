const { getPromos , login } = require("./responsableRayon.controller")
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation")

router.get("/getPromos",  getPromos);
router.post("/login", login);

module.exports = router;