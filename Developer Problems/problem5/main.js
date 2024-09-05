let btn = document.querySelector('#hide')
let tooltip = document.querySelector('.tooltip')

btn.addEventListener('mouseenter', function(){
    tooltip.style.display = "block"
} )

btn.addEventListener('mouseleave', function(){
    tooltip.style.display = "none"

})