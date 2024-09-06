gsap.to("#page2 img",{
    width : "100%",
    scrollTrigger : {
        // When using simple
        // trigger : "#page2 img",


        // When using pin
        trigger : "#page2",
        scroller:"body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }

} )