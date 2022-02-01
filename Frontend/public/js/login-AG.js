import AdminGeneral from "./classes/adminGeneral.js";
const loginForm = document.getElementById('loginForm');


window.addEventListener('DOMContentLoaded', ()=>{
    

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let login = await AdminGeneral.login(loginForm.email.value , loginForm.password.value);
        console.log(login)
        if(login.success == true){
            console.log("you're logged in")
            location.replace("../../pages/dashboard/adminGeneral.html");
        }else{
            console.log("email or password are incorrect")
        };
    })

    
})