var t1 = gsap.timeline();

t1.to("#loader",{
top:"-100vh",
delay:4,
duration:2

})

t1.from("#navbar",{
    y: -200,
    duration: 1,
    // delay: 1,
})
t1.from("#part1, #part2, #part3", {
    y: -100,
    duration: 1, 
    opacity: 0,
    stagger: 0.5
})
t1.from("#main h1", {
    x: -1500,
    duration: 2,
    stagger: 0.5
})
t1.from("#main img",{
 x: 100,
 opacity: 0}
)