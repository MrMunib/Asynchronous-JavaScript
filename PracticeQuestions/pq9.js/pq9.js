var txtarea = document.querySelector('textarea')
var counter = document.querySelector('span')

txtarea.addEventListener('input', function(){
    counter.textContent = txtarea.value.length
})