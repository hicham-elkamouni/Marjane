const {
    createAdminCentre,
    getAdminCentres,
    getAdminCentreById,
    updateAdminCentre,
    deleteAdminCentre,
    login
  } = require("./adminGenerale.controller")
  const router = require("express").Router();
  const { checkToken } = require("../../auth/token_validation")
  
  router.post("/", checkToken,createAdminCentre);
  router.get("/", checkToken,getAdminCentres);
  router.get("/:id",checkToken,getAdminCentreById);
  router.patch("/", checkToken,updateAdminCentre);
  router.delete("/", checkToken,deleteAdminCentre);
  router.post("/login", login);
  
  module.exports = router;
  