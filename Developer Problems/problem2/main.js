let main = document.querySelector('#main')

let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    fetch(`https://randomuser.me/api`)
    .then(raw => raw.json())
    .then(res => {
        let {name, gender, email, picture} = res.results[0]       
        
        main.innerHTML += ` <div class="card w-60 p-4 rounded-md bg-zinc-700">
        <div class="w-20 h-20 rounded-2xl mb-3 bg-zinc-600">
        <img class="rounded-2xl" src="${picture.large}" alt=""></div>
        <h3 class="text-2xl font-semibold">${name.first + " " + name.last}</h3>
        <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
        <h6 class="text-sm opacity-40">${email}</h6>
        <p class="mt-5 text-xs opacity-80 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iste?
        </p>
        
        </div>`   
    
    })
})



