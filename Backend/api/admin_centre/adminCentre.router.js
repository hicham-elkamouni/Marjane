const { createPromo, createRespRayon, deletePromo, getAllPromos, getAllRaspRayons } = require("./adminCentre.controller")

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/createRespRayon", createRespRayon);
router.get("/getAllRespRayon", getAllRaspRayons);
router.post("/createPromo", createPromo);
router.delete("/deletePromo", deletePromo);
router.get("/getAllPromos", getAllPromos);
// router.delete("/deleteRespRayon", deleteRespRayon);


module.exports = router 