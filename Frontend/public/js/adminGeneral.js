import router from "./routes/adminGeneral.js";
const adminsCentreBtn = document.getElementById("adminsCentreBtn")
const promtionsBtn = document.getElementById("promtionsBtn")

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("inside domContentLoaded");
  let content = router("adminsCentreList");
//   console.log(content);
  document.querySelector(".content-container").innerHTML = content;

  
});

adminsCentreBtn.addEventListener("click",(e)=> {
    e.preventDefault();
    let content1 = router("adminsCentreList");
    document.querySelector(".content-container").innerHTML = content1

})

promtionsBtn.addEventListener("click",(e)=> {
    e.preventDefault();
    let content2 = router("promotions");
    document.querySelector(".content-container").innerHTML = content2

})