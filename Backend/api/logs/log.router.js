const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { create , getLogs } = require("./logs.controllers");

router.post("/", checkToken, create);
router.get("/" , checkToken ,getLogs);

module.exports = router;