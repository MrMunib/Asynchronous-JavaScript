let input = document.querySelector('input');

var data = [
    {
        name: "Ali",
        src: "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww",
    },
    {
        name: "Al-karam",
        src: "https://plus.unsplash.com/premium_photo-1674854858248-8987c02e74cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww",
    },
    {
        name: "Al",
        src: "https://images.unsplash.com/photo-1541752171745-4176eee47556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Amina",
        src: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Abida",
        src: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D",
    },
];

var pers = "";

data.forEach(function (elem) {
    pers += `<div class="person">
                    <img src="${elem.src}" alt="${elem.name}">
                    <h4>${elem.name}</h4>
                </div>`;
});

let people = document.querySelector(".people");

if (people) {
    people.innerHTML = pers;
}

input.addEventListener('input', function() {
    let searchValue = input.value.toLowerCase();
    let matching = data.filter(function(e) {
        return e.name.toLowerCase().startsWith(searchValue);
    });

    // Display matching results (Optional: update the people section with matching results)
    let resultHtml = "";
    matching.forEach(function (elem) {
        resultHtml += `<div class="person">
                            <img src="${elem.src}" alt="${elem.name}">
                            <h4>${elem.name}</h4>
                        </div>`;
    });
    
    if (people) {
        people.innerHTML = resultHtml;
    }
});
