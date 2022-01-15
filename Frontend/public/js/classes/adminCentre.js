const BASE_URL = "http://localhost:3000/api/adminCentre/"

export default class AdminCenter {
  
    // LOGIN 
    static login = async (email , password) => {
      try {
        console.log("inside login admin center")
        let loginFields = 
        {
            email : email,
            password : password
        }
        let loginRes = await axios.post(BASE_URL+'login',loginFields)
        let loginDetails = await loginRes.data;
        return loginDetails

      }catch (e) {
        console.error(e);
      }
    }

    // GET ALL RESPONSABLE RAYON
    static getAllRespRayons = async () => {
      console.log("inside getAllRespRayons method admin center");
      try {
          let res = await axios.get(BASE_URL+"getAllRespRayon");
          let respRayonData = await res.data;
          return respRayonData;
      }catch (e) {
          console.error(e);
      }

    }

    // ADD RESPONSABLE RAYON
    static addRespRayon = async (respRayonFields) => {
      console.log("inside add admin centre method admin centre");
      try {
        let res = await axios.post(BASE_URL+"createRespRayon",respRayonFields);
        let resDetails = await res.data;
        return resDetails;
      }catch (e) {
        console.error(e);
      }
    }

  // DELETE RESPONSABLE RAYON
  static deleteRespRayon = async (id) => {
    console.log("inside delete responsable rayon  admin centre");
    let parsedId = parseInt(id)
    try {
      let res = await axios.delete(BASE_URL+"deleteRespRayon/"+parsedId);
      let resDetails = await res.data;
      console.log(resDetails);
      return resDetails;
    }catch (e) {
      console.error(e);
    }
  }
  
  // ADD PROMO
  static addPromo = async (PromoFields) => {
    console.log("inside add admin centre method admin centre");
    try {
      let res = await axios.post(BASE_URL+"addAdminCentre",PromoFields);
      let resDetails = await res.data;
      return resDetails;
    }catch (e) {
      console.error(e);
    }
  }
  
  // SHOW PROMOS
  static getAllPromos = async () => {
    console.log("inside getAllPromos method admin center");
    try {
        let res = await axios.get(BASE_URL+"getAllPromos");
        let respRayonData = await res.data;
        return respRayonData;
    }catch (e) {
      console.error(e);
    }
  }
  
  // DELETE PROMO
  static deletePromo = async (id) => {
    console.log("inside delete Promo  admin centre");
    let parsedId = parseInt(id)
    try {
      let res = await axios.delete(BASE_URL+"deleteAdminCentre/"+parsedId);
      let resDetails = await res.data;
      console.log(resDetails);
      return resDetails;
    }catch (e) {
      console.error(e);
    }
  }

  // UPDATE PROMO
  
}