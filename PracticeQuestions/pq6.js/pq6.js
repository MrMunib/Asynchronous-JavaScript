let about = document.querySelector('#about')
let home = document.querySelector('#home')
let contact = document.querySelector('#contact')

let abouttext = document.querySelector('#abouttext')
let hometext = document.querySelector('#hometext')
let contacttext = document.querySelector('#contacttext')



hometext.style.display = "block"
hometext.style.width = "50%"


home.addEventListener('click', function(){
    removeAllText()
    hometext.style.display = "block"
    hometext.style.width = "50%"
})


contact.addEventListener('click', function(){
    removeAllText()
    contacttext.style.display = "block"
    contacttext.style.width = "50%"
})


about.addEventListener('click', function(){
    removeAllText()
    abouttext.style.display = "block"
    abouttext.style.width = "50%"
})

function removeAllText(){
    hometext.style.display = "none"
    contacttext.style.display = "none"
    abouttext.style.display = "none"

}
