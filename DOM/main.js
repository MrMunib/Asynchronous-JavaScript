let h1 = document.querySelector('h1')

// h1.classList.add('blue')
// h1.classList.remove('blue')






// Creating and Deleting Elements
//      createElement()
//      appendChild()
//      removeChild()

// let h3 = document.createElement('h3')
let body = document.querySelector('body')


// h3.textContent = "createElement"
// body.appendChild(h3)


// body.removeChild(h3)








// Event Handling
//      addEventListner( )

let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    body.style.background = "blue"
})


btn.addEventListener('dblclick', function(){
    body.style.background = "red"
})

btn.addEventListener('mouseover', function(){
    body.style.background = "orange"
})

btn.addEventListener('mouseleave', function(){
    body.style.background = "pink"
})

btn.addEventListener('mousemove', function(){
    body.style.background = "purple"
})

h1.addEventListener('mousemove', function(dets){
    console.log(dets)
})

