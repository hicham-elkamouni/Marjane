const BASE_URL = "http://localhost:3000/api/"

export default class AdminGeneral {
    
    static login = async (email , password) => {
        console.log("inside login method general admin");
        try {
            let loginFields = {
                email : email,
                password : password
            }
            let loginRes = await axios.post(BASE_URL+"adminGenerale/login",loginFields);
            let loginDetails = await loginRes.data;
            return loginDetails;
        }catch (e) {
            console.error(e);
        }

    }

    static getAdminsCentre = async () => {
        console.log("inside getAdminsCentre method general admin");
        try {
            let res = await axios.get(BASE_URL+"adminGenerale/getAdminsCentre");
            let adminsData = await res.data;
            return adminsData;
        }catch (e) {
            console.error(e);
        }

    }

    static getLogs = async () => {
        console.log("inside login method general admin");
        try {
            let Res = await axios.post(BASE_URL+"adminGenerale/login");
            let loginDetails = await Res.data;
            return loginDetails;
        }catch (e) {
            console.error(e);
        }

    }

}