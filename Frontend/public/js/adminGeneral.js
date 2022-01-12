import AdminGeneral from "./classes/adminGeneral.js";
import router from "./routes/adminGeneral.js";
const adminsCentreBtn = document.getElementById("adminsCentreBtn")
const promtionsBtn = document.getElementById("promtionsBtn")
const logsBtn = document.getElementById("logsBtn")

window.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  let content = router("adminsCentreList");
  document.querySelector(".content-container").innerHTML = content;
  
  const admins = await AdminGeneral.getAdminsCentre()
    const allAdmins = admins.data;
    let template = ``;
    await allAdmins.forEach(admin => {
      template += `
        <tr>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt="" />
                  </div>
                  <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                          ${admin.nom + admin.prenom}
                      </p>
                  </div>
              </div>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Admin General</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">
                  Jan 21, 2020
              </p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span class="relative">Active</span>
              </span>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button class="text-xl text-red-600"><i class="fas fa-trash"></i></button>
            <button class="text-xl text-green-600 pl-6"><i class="fas fa-edit"></i></button>
            <button class="text-xl text-yellow-600 pl-6"><i class="fas fa-comment-dots"></i></button>
          </td>
      </tr>
      `
    })

      document.getElementById('tbody').innerHTML = template;

});







adminsCentreBtn.addEventListener("click",async (e)=> {
    e.preventDefault();
    let content = router("adminsCentreList");
    document.querySelector(".content-container").innerHTML = content
    const admins = await AdminGeneral.getAdminsCentre()
    const allAdmins = admins.data;
    let template = ``;
    await allAdmins.forEach(admin => {
      template += `
        <tr>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt="" />
                  </div>
                  <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                          ${admin.nom + admin.prenom}
                      </p>
                  </div>
              </div>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">Admin General</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">
                  Jan 21, 2020
              </p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span class="relative">Active</span>
              </span>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button class="text-xl text-red-600"><i class="fas fa-trash"></i></button>
            <button class="text-xl text-green-600 pl-6"><i class="fas fa-edit"></i></button>
            <button class="text-xl text-yellow-600 pl-6"><i class="fas fa-comment-dots"></i></button>
          </td>
      </tr>
      `
    })

    document.getElementById('tbody').innerHTML = template;
  //   admins.map(admin => {
  //     console.log(admin);
  // });



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

  // window.addEventListener("load", ()=>{
  //     //everything is fully loaded, don't use me if you can use DOMContentLoaded
  //     console.log("inside load event");
  //     let content = "injected after getting content"
  //     document.querySelector(".test").innerHTML = content;
  // });