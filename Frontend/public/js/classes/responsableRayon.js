export default class ResponsableRayon {
    
    static login = async (email , password) => {
      try {
        let loginFields = {
            email : email,
            password : password
        }
        let login = await axios.post('http://localhost:3000/api/respRayon/login',loginFields)
        let loginState = await login.data;
        return loginState;

        }catch (e) {
          console.error(e);
        }
       
    }

    // ----- login with try catch ----
    // static login = async (email , password) => {
    //   try {
    //     let loginFields = {
    //         email : email,
    //         password : password
    //     }
    //     let login = await axios.post('http://localhost:3000/api/respRayon/login',loginFields)
    //     let loginState = await login.data;
    //     return loginState;

    //     }catch (e) {
    //       console.error(e);
    //     }
       
    // }

}