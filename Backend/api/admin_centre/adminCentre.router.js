const { createPromo, createRespRayon, deletePromo, getAllPromos, getAllRespRayons, login, deleteRespRayon } = require("./adminCentre.controller")

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

// RESPONSABLE RAYON
router.post("/login", login);
router.post("/createRespRayon", createRespRayon);
router.get("/getAllRespRayon", getAllRespRayons);
router.delete("/deleteRespRayon/:id", deleteRespRayon);

// PROMOS
router.post("/createPromo", createPromo);
router.delete("/deletePromo/:id", deletePromo);
router.get("/getAllPromos", getAllPromos);


module.exports = router 