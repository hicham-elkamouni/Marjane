import router from "./routes/adminGeneral.js";
const adminsCentreBtn = document.getElementById("adminsCentreBtn")
const promtionsBtn = document.getElementById("promtionsBtn")
const logsBtn = document.getElementById("logsBtn")

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("inside domContentLoaded");
  let content = router("adminsCentreList");
//   console.log(content);
  document.querySelector(".content-container").innerHTML = content;

  
});

adminsCentreBtn.addEventListener("click",(e)=> {
    e.preventDefault();
    let content = router("adminsCentreList");
    document.querySelector(".content-container").innerHTML = content

})

promtionsBtn.addEventListener("click",(e)=> {
    e.preventDefault();
    let content = router("promotions");
    document.querySelector(".content-container").innerHTML = content

})

logsBtn.addEventListener("click",(e)=> {
    e.preventDefault();
    let content = router("logs");
    document.querySelector(".content-container").innerHTML = content

})