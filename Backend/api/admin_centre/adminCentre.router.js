const { createPromo, createRespRayon, deletePromo, getAllPromos, getAllRespRayons, login, deleteRespRayon, checkAuth } = require("./adminCentre.controller")

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

// RESPONSABLE RAYON
router.post("/login", login);
router.post("/createRespRayon", createRespRayon);
router.get("/getAllRespRayon",checkToken("admin_centre"), getAllRespRayons);
router.delete("/deleteRespRayon/:id", deleteRespRayon);

// PROMOS
router.post("/createPromo",createPromo);
router.delete("/deletePromo/:id",deletePromo);
router.get("/getAllPromos",getAllPromos);

// CHECK AUTH
router.get("/checkAuth", checkAuth);


module.exports = router 