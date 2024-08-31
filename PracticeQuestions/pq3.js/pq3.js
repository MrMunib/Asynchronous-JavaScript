// jb bhi forms k saath deal karo yaad rakho ki submit hone par forms page ko reload krdety hain, aur tumhe khyall rakhna hai k pages reload na ho, nahi to agr page reload hua to JS nhi chly ge , q k JS chal payee is sy phly he reload ho chuka hoga

// Form ko submit krne par reload se rokny k liye (prevent Default)

// let body = document.querySelector('body')
// let form = document.querySelector('form')
// let inp1 = document.querySelector('#input1')
// let inp2 = document.querySelector('#input2')
// let h3 = document.querySelector('h3')

// form.addEventListener('submit', function(ev){
//     ev.preventDefault();

//     if(inp1.value.trim() === '' || inp2.value.trim() === ''){
//         h3.textContent = "Some Fields are blank"
//         h3.style.color = "red"
//     }
//     else{
//         h3.textContent = ""
//         h3.style.color = "black"

//     }

// })

// METHOD 2
let body = document.querySelector("body");
let form = document.querySelector("form");
let h3 = document.querySelector("h3");
let inps = document.querySelectorAll('input[type="text"]');

// form.addEventListener("submit", function (ev) {
//   ev.preventDefault();
//   inps.forEach(function (elem) {
//     if (elem.value === "") {
//   h3.textContent = "Some Fields are blank";
//   h3.style.color = "red";
//     }else{
//         h3.textContent = "All Fine";
//         h3.style.color = "Green";

//     }
//   });
// });

// METHOD 3

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  for (var i = 0; i < inps.length; i++) {
    if (inps[i].value.trim() === '') {
      h3.textContent = "Some Fields are blank";
      h3.style.color = "red";
      break;
    } else {
      h3.textContent = "All Fine";
      h3.style.color = "Green";
    }
  }
});
