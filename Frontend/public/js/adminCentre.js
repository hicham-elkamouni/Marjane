import adminCentre from "./classes/adminCentre.js";
import router from "./routes/adminCentre.js";
const respRayonBtn = document.getElementById("respRayonBtn")
const promtionsBtn = document.getElementById("promtionsBtn")
const logsBtn = document.getElementById("logsBtn")

const addForm = document.getElementById("addForm")

const closeModal = document.querySelector("#closeModal");

window.addEventListener("DOMContentLoaded", async (e) => {


  e.preventDefault();
  await respRayonData();

  // ADD NEW RESP RAYON
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // getting admin center fields 
    let AdminCentreFields = {
      nom : addForm.lastName.value,
      prenom : addForm.firstName.value,
      email : addForm.email.value,
      password : addForm.password.value,
      status : "active"
    }

    let newAdminCentre = await AdminGeneral.addAdminCentre(AdminCentreFields)
    console.log(newAdminCentre);
    location.reload(); 
  })

});

// SHOWING RESP RAYON LIST IN UI
const respRayonData = async () => {

  let content = router("respRayonList");
  document.querySelector(".content-container").innerHTML = content;
  
    const respRayon = await adminCentre.getAllRespRayons()
    const allRespRayon = await respRayon.data;
    document.getElementById('tbody').innerHTML = ``
    await allRespRayon.map(respRayon => {
      
      document.getElementById('tbody').innerHTML += `
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
                          ${respRayon.nom} ${respRayon.prenom}
                      </p>
                  </div>
              </div>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">${respRayon.email}</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">
                  ${respRayon.created_at}
              </p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span class="relative">${respRayon.status}</span>
              </span>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button type="button" class="text-xl text-red-600" onclick="deleteRespRayon(${respRayon.id})"><i class="fas fa-trash"></i></button>
            <button type="button" class="text-xl text-green-600 pl-6"><i class="fas fa-edit"></i></button>
            <button type="button" class="text-xl text-yellow-600 pl-6"><i class="fas fa-comment-dots"></i></button>
          </td>
      </tr>
      `
    })

}

// DELETE AN ADMIN CENTER
window.deleteRespRayon = async (id) => {
  console.log("id you want to delete", id);
  let deletedRespRayon = await adminCentre.deleteRespRayon(id);
  console.log(deletedRespRayon);
  location.reload();
}



  
// RESP RAYON SECTION
respRayonBtn.addEventListener("click",async (e)=> {
  e.preventDefault();
  let content = router("respRayonList");
  document.querySelector(".content-container").innerHTML = content
  await respRayonData();
})



// PROMOTIONS SECTION
promtionsBtn.addEventListener("click",async (e)=> {
  e.preventDefault();
  let content = router("promotions");
  document.querySelector(".content-container").innerHTML = content
  await promotionsData();
})



// SHOWING PROMOTIONS LIST IN UI
const promotionsData = async () => {

  let content = router("promotions");
  document.querySelector(".content-container").innerHTML = content;
  
    const promotions = await adminCentre.getAllPromos()
    const allPromotions = await promotions.data;
    document.getElementById('tbody').innerHTML = ``
    await allPromotions.map(promo => {
      
      document.getElementById('tbody').innerHTML += `
        <tr>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
                  <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                          ${promo.pourcentage}
                      </p>
                  </div>
              </div>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">${promo.fidelite}</p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">
                  ${promo.statut}
              </p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">
                  ${promo.de}
              </p>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span class="relative">${promo.a}</span>
              </span>
          </td>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button type="button" class="text-xl text-red-600" onclick="deletePromo(${promo.id})"><i class="fas fa-trash"></i></button>
            <button type="button" class="text-xl text-green-600 pl-6"><i class="fas fa-edit"></i></button>
            <button type="button" class="text-xl text-yellow-600 pl-6"><i class="fas fa-comment-dots"></i></button>
          </td>
      </tr>
      `
    })

}



window.addNew = () => {
  modal.classList.remove('hidden');
}

closeModal.addEventListener("click", () => {
  modal.classList.add('hidden');
})

