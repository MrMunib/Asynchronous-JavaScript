var progress = document.querySelector("#progress");

let count = 0;

let bro = setInterval(() => {
    if (count >= 100) {
        clearInterval(bro);
        alert("Download Completed")
    } else {
        count +=10;
        if (count > 100) count = 100;
        progress.style.width = count + "%";
    }
}, 100);
