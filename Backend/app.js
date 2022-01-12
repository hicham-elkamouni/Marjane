require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const adminGeneraleRouter = require("./api/admin_generale/adminGenerale.router")
const adminCentreRouter = require("./api/admin_centre/adminCentre.router")
const respRayonRouter = require("./api/responsable_rayon/responsableRayon.router")

app.use(express.json());
app.use(cors());

app.use("/api/adminGenerale", adminGeneraleRouter) ;
app.use("/api/adminCentre", adminCentreRouter) ;
app.use("/api/respRayon", respRayonRouter) ;

app.listen(process.env.APP_PORT, () => {
    console.log("server up and running on port " + process.env.APP_PORT);
})