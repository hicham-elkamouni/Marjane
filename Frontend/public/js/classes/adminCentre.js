
export default class AdminCenter {
    
    // constructor() {
    //   super(firstName, lastName, email, cne, age, campus);
    // }

    static login = async (email , password) => {
      try {
        console.log("inside login admin center")
        let loginFields = 
        {
            email : email,
            password : password
        }
        let loginRes = await axios.post('http://localhost:3000/api/adminCentre/login',loginFields)
        let loginDetails = await loginRes.data;
        return loginDetails

      }catch (e) {
        console.error(e);
      }
        
    }

    static getAllRespRayons = async () => {
        axios.get('http://localhost:3000/api/respRayon/getPromos')
        .then( (res) =>{
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
}