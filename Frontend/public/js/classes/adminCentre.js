const BASE_URL = "http://localhost:3000/api/adminCentre/"

export default class AdminCenter {
  
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

    
    static addRespRayon = async (respRayonFields) => {
      console.log("inside add admin centre method admin centre");
      try {
        let res = await axios.post(BASE_URL+"addAdminCentre",respRayonFields);
        let resDetails = await res.data;
        return resDetails;
      }catch (e) {
        console.error(e);
      }
    }
    
  static deleteRespRayon = async (id) => {
    console.log("inside delete responsable rayon  admin centre");
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
  static deleteRespRayon = async (id) => {
    console.log("inside delete responsable rayon  admin centre");
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