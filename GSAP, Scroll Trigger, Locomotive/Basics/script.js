// gsap.to('#box' , {
//     x: 100,
//     duration : 1,
//     delay: 2,
//     backgroundColor : "orange",
//     rotate : 90,
//     borderRadius: 50,
//     border: 2 
// })

// gsap.from('#box' , {
//     x: 100,
//     duration : 1,
//     delay: 2,
//     backgroundColor : "orange",
//     rotate : 90,
//     borderRadius: 50,
// })
var tl = gsap.timeline()

tl.to('#box1' , {
    x: 600,
    duration : 1,
    // delay: 2,
    backgroundColor : "orange",
    rotate : 90,
    borderRadius: 50,
    scale: 0.5
})

tl.to('#box2' , {
    x: 600,
    duration : 1,
    // delay: 3,
    backgroundColor : "pink",
    rotate : 90,
    borderRadius: 50,
    scale: 0.5
})
tl.to('#box3' , {
    x: 600,
    duration : 1,
    // delay: 3,
    backgroundColor : "gold",
    rotate : 90,
    borderRadius: 50,
    scale: 0.5
})

