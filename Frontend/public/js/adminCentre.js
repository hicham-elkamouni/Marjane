import adminCentre from "./classes/adminCentre.js";
import router from "./routes/adminCentre.js";
const respRayonBtn = document.getElementById("respRayonBtn")
const promtionsBtn = document.getElementById("promtionsBtn")

const respRayonForm = document.getElementById("respRayonForm")
const promoForm = document.getElementById("promoForm")

const modalRespRayon = document.getElementById('modalRespRayon')
const modalPromo = document.getElementById('modalPromo')

const closeRespRayonModal = document.querySelector("#closeRespRayonModal");
const closePromoModal = document.querySelector("#closePromoModal");

window.addEventListener("DOMContentLoaded", async (e) => {


  e.preventDefault();
  await respRayonData();

  // ADD NEW RESP RAYON
  respRayonForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // getting admin center fields 
    let RespRayonFields = {
      nom : respRayonForm.lastName.value,
      prenom : respRayonForm.firstName.value,
      email : respRayonForm.email.value,
      password : respRayonForm.password.value,
      status : "active",
      role : "responsable_rayon"
    }
    console.log(RespRayonFields);
    let newRespRayon = await adminCentre.addRespRayon(RespRayonFields)
    console.log(newRespRayon);
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
      
      document.getElementById('tbody').innerHTML += 
      /*html*/`
        <tr>
          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div class="flex items-center">
        
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

// DELETE A RESP RAYON
window.deleteRespRayon = async (id) => {
  console.log("id you want to delete", id);
  let deletedRespRayon = await adminCentre.deleteRespRayon(id);
  console.log(deletedRespRayon);
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
  // location.reload();
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

// ADD NEW PROMO
promoForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let today = new Date();

  let hours = String(today.getHours()).padStart(2, "0");
  let minutes = String(today.getMinutes()).padStart(2, "0");
  let seconds = String(today.getSeconds()).padStart(2, "0");
  // YYYY-MM-DD H:M:S
  let startingDate = promoForm.de.value + ' ' + hours + ':' + minutes + ':' + seconds
  console.log('full date is', startingDate)

  let endingDate = promoForm.a.value +' 00:00:00'
  
  // getting admin center fields 
  let PromoFields = {
    pourcentage : promoForm.poucentage.value,
    fidelite : promoForm.fidelite.value,
    de : startingDate,
    a : endingDate,
    statut : "en cours"
  }
  console.log(PromoFields);
  let newPromo = await adminCentre.addPromo(PromoFields)
  console.log(newPromo);
  location.reload(); 
})

// DELETE A PROMO
window.deletePromo = async (id) => {
  console.log("heeloooooooooooooooooooooooooooo")
  console.log("id you want to delete", id);
  let deletedRespRayon = await adminCentre.deletePromo(id);
  console.log(deletedRespRayon);
  // location.replace('http://127.0.0.1:5500/src/pages/dashboard/adminCentre.html')
  location.reload();
}

// MODAL FOR RESP RAYON
window.addRespRayon = () => {
  modalRespRayon.classList.remove('hidden');
}

closeRespRayonModal.addEventListener("click", () => {
  modalRespRayon.classList.add('hidden');
})


// MODAL FOR PROMOTION
window.addPromo = () => {
  modalPromo.classList.remove('hidden');
}

closePromoModal.addEventListener("click", () => {
  modalPromo.classList.add('hidden');
})

