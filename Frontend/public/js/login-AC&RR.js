import AdminCentre from "./classes/adminCentre.js";
import ResponsableRayon from "./classes/responsableRayon.js";
const loginForm = document.getElementById('loginForm');
const adminCentreRadioBtn = document.getElementById('adminCentre')
const responsableRayonRadioBtn = document.getElementById('responsableRayon')

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  loginForm.addEventListener('submit',async (e)=> {
    e.preventDefault();
    
    // cheking if radio is selelected
    if(adminCentreRadioBtn.checked || responsableRayonRadioBtn.checked){
  
        //check wich one is selected (AC / RR)
        if(adminCentreRadioBtn.checked){
          let login = await AdminCentre.login(loginForm.email.value , loginForm.password.value);

          if(login.success == true){
            console.log("you're logged in successfully")
            let StoredToken = sessionStorage.getItem('token', login.token);
            console.log(StoredToken);
          }else {
            console.log("email or password are incorrect");
          }
          
        }else{
          console.log("inside responsable rayon")
          let login = await ResponsableRayon.login(loginForm.email.value, loginForm.password.value);
          console.log(login);
          if(login.success == true){
            console.log("you're logged in successfully")
            let StoredToken = sessionStorage.getItem('token', login.token);
            console.log(StoredToken);
          }else {
            console.log("email or password are incorrect");
          }
        }
        
          // if()
          // let StoredToken = await  localStorage.setItem("lastname", "Smith");      
      
    }else{
        console.log("check one of two roles to continue")
    }
  
        // let Promos = await axios.get('http://localhost:3000/api/respRayon/getPromos')
        // let data = await Promos.data;
        // console.log(data);
        // .then( (res) =>{
        //   console.log(res.data);
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
  
  })
});


window.addEventListener('DOMContentLoaded', () => {


})