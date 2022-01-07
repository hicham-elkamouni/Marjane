import axios from ""

export default class AdminCenter {
    
    // constructor() {
    //   super(firstName, lastName, email, cne, age, campus);
    // }

    static login = async (email , password) => {
        let loginFields = {
            email : email,
            password : password
        }
        axios.post('http://localhost:3000/api/adminCentre/login',loginFields)
        .then( (res) =>{
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
}