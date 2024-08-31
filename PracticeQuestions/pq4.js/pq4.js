let body = document.querySelector("body");
let inp = document.querySelector("input");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let ul = document.querySelector("ul");

var li;
add.addEventListener("click", function () {
  if (inp.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
    console.log(ul.children.length);
  }
});
remove.addEventListener('click', function() {
    if (inp.value.trim() === '') {} 
    else {
        let childrenArray = Array.from(ul.children);
        for (let i = childrenArray.length - 1; i >= 0; i--) {
            let child = childrenArray[i];
            if (child.textContent.trim() === inp.value.trim()) {
                ul.removeChild(child);
            }
        }
        inp.value = '';
    }
});

