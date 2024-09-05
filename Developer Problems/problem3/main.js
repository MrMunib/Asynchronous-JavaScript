// Working With Local Storage

/*

localStorage aik aisa spaec hai browser k pas ji main tum data store krdo to data stored he rehta hai, app chahhe to browser bnd krdo , refresh krdo ya kuch b kro apka data stored rahega jab tak ap khud usy delete na krdain




localstrorage hota to browser ka part hai par data store ye website k nam sy krta hai  




*/

let block = document.querySelector('#block')
let unblock = document.querySelector('#unblock')
let show = document.querySelector('span')


block.addEventListener('click', function(){
    localStorage.setItem("block", true)
    func()
})

unblock.addEventListener('click', function(){
    localStorage.setItem("block", false)
    func()
})


function func(){
    if(localStorage.getItem('block') === 'false'){
        show.textContent = "Not Blocked"
    }else{
        show.textContent = "Blocked"
    }

    console.log(localStorage)

}