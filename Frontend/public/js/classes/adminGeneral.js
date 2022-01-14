const BASE_URL = "http://localhost:3000/api/adminGenerale/"

export default class AdminGeneral {
    
    static login = async (email , password) => {
        console.log("inside login method general admin");
        try {
            let loginFields = {
                email : email,
                password : password
            }
            let loginRes = await axios.post(BASE_URL+"login",loginFields);
            let loginDetails = await loginRes.data;
            return loginDetails;
        }catch (e) {
            console.error(e);
        }

    }

    static getAdminsCentre = async () => {
        console.log("inside getAdminsCentre method general admin");
        try {
            let res = await axios.get(BASE_URL+"getAdminsCentre");
            let adminsData = await res.data;
            return adminsData;
        }catch (e) {
            console.error(e);
        }

    }

    static getLogs = async () => {
        console.log("inside login method general admin");
        try {
            let Res = await axios.post(BASE_URL+"login");
            let loginDetails = await Res.data;
            return loginDetails;
        }catch (e) {
            console.error(e);
        }

    }

    static addAdminCentre = async (adminCenterFields) => {
        console.log("inside add admin centre method general admin");
        try {
            let res = await axios.post(BASE_URL+"addAdminCentre",adminCenterFields);
            let resDetails = await res.data;
            return resDetails;
        }catch (e) {
            console.error(e);
        }
    }

    static deleteAdminCentre = async (id) => {
        console.log("inside delete admin centre  general admin");
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

    // static deleteAdminCentre = async (id) => {
    //     console.log("inside delete admin centre  general admin");
    //     try {
    //         let res = await axios.delete(BASE_URL+"deleteAdminCentre", 
    //         {
    //             data : {
    //                 id : id
    //             }
    //         });
    //         let resDetails = await res.data;
    //         console.log(resDetails);
    //         return resDetails;
    //     }catch (e) {
    //         console.error(e);
    //     }
    // }

}