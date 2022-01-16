const BASE_URL = "http://localhost:3000/api/respRayon/"

export default class ResponsableRayon {
    
    static login = async (email , password) => {
      try {
        let loginFields = {
            email : email,
            password : password
        }
        let login = await axios.post(BASE_URL+"login",loginFields)
        let loginState = await login.data;
        return loginState;

        }catch (e) {
          console.error(e);
        }
       
    }

    static getAllPromos = async () => {
      console.log("inside getAllPromos method resp rayon");
      try {
          let res = await axios.get(BASE_URL+"getPromos");
          let respRayonData = await res.data;
          return respRayonData;
      }catch (e) {
        console.error(e);
      }
    }
}