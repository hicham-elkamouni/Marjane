import adminCentre from "./classes/adminCentre.js";
import router from "./routes/adminCentre.js";
const adminsCentreBtn = document.getElementById("adminsCentreBtn")
const promtionsBtn = document.getElementById("promtionsBtn")
const logsBtn = document.getElementById("logsBtn")

const addForm = document.getElementById("addForm")

const closeModal = document.querySelector("#closeModal");

window.addEventListener("DOMContentLoaded", async (e) => {


  e.preventDefault();
  await respRayonData();

  // ADD NEW ADMIN CENTER
  // addForm.addEventListener('submit', async (e) => {
  //   e.preventDefault();
  //   // getting admin center fields 
  //   let AdminCentreFields = {
  //     nom : addForm.lastName.value,
  //     prenom : addForm.firstName.value,
  //     email : addForm.email.value,
  //     password : addForm.password.value,
  //     status : "active"
  //   }

  //   let newAdminCentre = await AdminGeneral.addAdminCentre(AdminCentreFields)
  //   console.log(newAdminCentre);
  //   location.reload(); 
  // })

});

// SHOWING ADMINE CENTER LIST IN UI
const respRayonData = async () => {

  let content = router("adminsCentreList");
  document.querySelector(".content-container").innerHTML = content;
  
    const admins = await AdminGeneral.getAdminsCentre()
    const allAdmins = await admins.data;
    let template = ``;
    await allAdmins.map(admin => {
      
      template += `
        <tr>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt="" />
                  </div>
                  <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                          ${admin.nom} ${admin.prenom}
                      </p>
                  </div>
              </div>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">${admin.email}</p>
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
                  <span class="relative">${admin.status}</span>
              </span>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button type="button" class="text-xl text-red-600" onclick="deleteAdminCentre(${admin.id})"><i class="fas fa-trash"></i></button>
            <button type="button" class="text-xl text-green-600 pl-6"><i class="fas fa-edit"></i></button>
            <button type="button" class="text-xl text-yellow-600 pl-6"><i class="fas fa-comment-dots"></i></button>
          </td>
      </tr>
      `
    })

    document.getElementById('tbody').innerHTML = template;
}

// DELETE AN ADMIN CENTER
window.deleteAdminCentre = async (id) => {
  console.log("id you want to delete", id);
  let deletedAdminCentre = await AdminGeneral.deleteAdminCentre(id);
  console.log(deletedAdminCentre);
  location.reload();
}

window.addNew = () => {
  modal.classList.remove('hidden');
}

closeModal.addEventListener("click", () => {
  modal.classList.add('hidden');
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