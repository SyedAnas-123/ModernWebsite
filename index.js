
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// **********GSAP**************



var tl = gsap.timeline()
// sbse phelewoneeche aj rha he phr durastion 0 ki wajh se nazr nh arha eh phr forun wo up arha he apni original posiiton pr or ye nazrareha he ku ke duartiuon b1 de hgue
tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#page1",{
    // means neeche se upr aeega 
    y:"30vh",
    duration:1,
    delay:1,


})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8

})