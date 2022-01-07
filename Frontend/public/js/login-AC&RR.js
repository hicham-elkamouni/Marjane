// import AdminCenter from "./classes/adminCenter.js";
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit',(e)=> {
  e.preventDefault();
  console.log(loginForm.email.value);
  console.log(loginForm.password.value);

  // const loginStatus = AdminCenter.login(loginForm.email.value , loginForm.password.value);
  
  // console.log(loginStatus);

    axios.get('http://localhost:3000/api/respRayon/getPromos')
      .then( (res) =>{
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

})


window.addEventListener('DOMContentLoaded', () => {


})