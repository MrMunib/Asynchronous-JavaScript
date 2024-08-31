let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let h3 = document.querySelector('h3')
let count = 0;
let interval ;


start.addEventListener('click', function(){
    interval = setInterval(function(){
        h3.textContent = count;
        count++
    }, 1000)
    alert("Count Down Started")
})


stop.addEventListener('click', function(){
    clearInterval(interval)
    alert("Count Down Stopped")
})