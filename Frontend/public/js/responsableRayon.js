import responsableRayon from "./classes/responsableRayon.js";
import router from "./routes/responsableRayon.js";
const promotionsBtn = document.getElementById("promotionsBtn")

const closeModal = document.querySelector("#closeModal");

window.addEventListener("DOMContentLoaded", async (e) => {


  e.preventDefault();
  await promoData();

});

// PROMOTIONS SECTION
promotionsBtn.addEventListener("click",async (e)=> {
  e.preventDefault();
  let content = router("promotions");
  document.querySelector(".content-container").innerHTML = content
  await promoData();
})


// SHOWING PROMO LIST IN UI

const promoData = async () => {

  let content = router("promotions");
  document.querySelector(".content-container").innerHTML = content;
  
    const promotions = await responsableRayon.getAllPromos()
    const promoState = await promotions.succes;
    const allPromotions = await promotions.data;
    console.log(typeof(allPromotions));
    document.getElementById('tbody').innerHTML = ``
    if(promoState == true){
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
  
    }else{
      document.querySelector(".content-container").innerHTML = `
      <h1 class="text-center text-3xl">THERE'S NO PROMOTIONS RIGHT NOW !!!</h1>
      `
    }
    
}

// DELETE AN ADMIN CENTER
window.deleteRespRayon = async (id) => {
  console.log("id you want to delete", id);
  let deletedRespRayon = await adminCentre.deleteRespRayon(id);
  console.log(deletedRespRayon);
  location.reload();
}

window.addNew = () => {
  modal.classList.remove('hidden');
}

closeModal.addEventListener("click", () => {
  modal.classList.add('hidden');
})


  





// promtionsBtn.addEventListener("click",(e)=> {
//   e.preventDefault();
//     let content = router("promotions");
//     document.querySelector(".content-container").innerHTML = content
// })

// logsBtn.addEventListener("click",(e)=> {
//     e.preventDefault();
//     let content = router("logs");
//     document.querySelector(".content-container").innerHTML = content
    
// })




  // window.addEventListener("load", ()=>{
  //     //everything is fully loaded, don't use me if you can use DOMContentLoaded
  //     console.log("inside load event");
  //     let content = "injected after getting content"
  //     document.querySelector(".test").innerHTML = content;
  // });