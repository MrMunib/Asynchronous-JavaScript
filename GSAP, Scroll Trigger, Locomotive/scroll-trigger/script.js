gsap.from('#page1 .circle', {
    scale:0,
    delay: 1,
    duration: 2,
    rotate: 720,
})

// gsap.from('#page2 .circle', {
//     scale:0,
//     delay: 1,
//     duration: 2,
//     rotate: 720,
//     scrollTrigger: "#page2 .circle",
// })

gsap.from('#page2 .circle', {
    scale:0,
    delay: 1,
    duration: 2,
    rotate: 720,
    scrollTrigger: {
        trigger:"#page2 .circle",
        scroller:"body",
        markers: true,
        start : "top 90%",
        end : "top 20%",
        scrub: true
    }})


    

    // Scroll triger PIN


    