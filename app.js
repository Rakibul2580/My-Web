const caresDisplya = () => {
    const cards = document.getElementById('all-card')
    data.forEach(data => {
        const {q, a} = data
        const div = document.createElement ('div')
        div.innerHTML = `
        <div class="card w-100 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">${q}</h2>
            <div class="card-actions justify-center mt-10">
                <label onclick="modal('${q}', '${a}')" for="my-modal-4" class="btn btn-primary modal-button">open modal</label>
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