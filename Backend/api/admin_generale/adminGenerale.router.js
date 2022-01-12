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
  
  router.post("/addAdminCentre", createAdminCentre);
  router.get("/getAdminsCentre", getAdminCentres);
  router.get("/getAdminsCentre/:id",getAdminCentreById);
  router.patch("/updateAdminCentre", checkToken,updateAdminCentre);
  router.delete("deleteAdminCentre", checkToken,deleteAdminCentre);
  router.post("/login", login);
  
  module.exports = router;
  