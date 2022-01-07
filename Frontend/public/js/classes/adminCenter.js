// import axios from "../../../node_modules/axios"

// export default class AdminCenter {
    
//     // constructor() {
//     //   super(firstName, lastName, email, cne, age, campus);
//     // }

//     static login = async (email , password) => {
//         console.log("inside login admin center")
//         let loginFields = {
//             email : email,
//             password : password
//         }
//         axios.post('http://localhost:3000/api/adminCentre/login',loginFields)
//         .then( (res) =>{
//           return res.data;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }

//     static getAllRespRayons = async () => {
//         axios.get('http://localhost:3000/api/respRayon/getPromos')
//         .then( (res) =>{
//           console.log(res.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
  
//     }
// }