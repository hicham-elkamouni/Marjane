export default class AdminGeneral {
    
    static login = async (email , password) => {
        console.log("inside login method general admin");
        try {
            let loginFields = {
                email : email,
                password : password
            }
            let loginRes = await axios.post("http://localhost:3000/api/adminGenerale/login",loginFields);
            let loginDetails = await loginRes.data;
            return loginDetails;
        }catch (e) {
            console.error(e);
        }

    }

}