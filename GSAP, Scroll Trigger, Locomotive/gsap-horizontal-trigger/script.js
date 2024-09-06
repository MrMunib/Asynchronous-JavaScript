gsap.to("#page2 h1", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 2,
    markers: true,
    pin: true,
    start: "top -5%",
    end: "top -100%",
    duration: 5
  },
});
