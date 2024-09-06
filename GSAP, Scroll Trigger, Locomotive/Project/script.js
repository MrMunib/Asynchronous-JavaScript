var tl = gsap.timeline()

tl.from("#nav h3", {
    y: -50,
    opacity : 0,
    delay: 0.4,
    duration: .8,
    stagger : .2
})



tl.from('#main h1',{
    x:-500,
    opacity: 0,
    stagger: 0.3
})

tl.from('img',{
    x:100,
    opacity:0,
    rotate:75,
    stagger: .4
})