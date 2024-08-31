 let body = document.querySelector('body')
 let btn = document.querySelector('button')
 let img1 = document.querySelector('#one')
 let img2 = document.querySelector('#two')


btn.addEventListener('click', function(){
    var src1 = img1.src
    var src2 = img2.src

    img1.src = src2
    img2.src = src1
    
})