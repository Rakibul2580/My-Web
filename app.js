alert('This website is a not a complete')
const caresDisplya = () => {
    const cards = document.getElementById('all-card')
    data.forEach(data => {
        console.log(data)
        const {q, a, h} = data
        const div = document.createElement ('div')
        div.innerHTML = `
        <div class="card w-100 bg-base-100 shadow-xl h-full">
            <div class="card-body">
                <h2 class="card-title justify-center mb-3">${h}</h2>
                <h2 class="card-title">${q}</h2>
            <div class="card-actions justify-center mt-10">
                <label onclick="modal('${q}', '${a}')" for="my-modal-4" class="btn btn-primary modal-button">open ans</label>
            </div>
            </div>
        </div>
        `
        cards.appendChild(div)

    })
}
caresDisplya()

const modal = (q, a) =>{
    console.log(q)
    console.log(a)
    const modalInfo = document.getElementById('modal-info')
    modalInfo.innerHTML = `
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
        <h3 class="text-lg font-bold">${q}</h3>
        <p class="py-4">${a}</p>
    </label>
    </label>
    `
}

// const modalBan = (q, a, h) =>{
//     console.log(q)
//     console.log(a)
//     const modalInfo = document.getElementById('modal-info-ban')
//     modalInfo.innerHTML = `
//     <input type="checkbox" id="my-modal-3" class="modal-toggle" />
//     <div class="modal">
//     <div class="modal-box relative">
//         <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//         <h3 class="text-lg font-bold">${h}</h3>
//         <h3 class="text-lg font-bold">${q}</h3>
//         <p class="py-4">${a}</p>
//     </div>
//     </div>
//     `
// }
