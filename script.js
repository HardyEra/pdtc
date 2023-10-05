// gsap.to("#word1",{
//     left:"10px",
//     duration:0.5,
//     delay:1,
// })
// gsap.to("#word3",{
//     right:0,
//     duration:0.5,
//     delay:1,
// })
// gsap.to("#word1",{
//     top:"-50px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#word2",{
//     top:"-50px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#word3",{
//     top:"-50px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#one",{
//     top:"10px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#two",{
//     top:"10px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#three",{
//     top:"10px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#last",{
//     top:"10px",
//     duration:0.5,
//     delay:1.7,
// })
// gsap.to("#page1",{
   
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#effect",
//         scroller:"body",
//         start:"top -10%",
//         end:"top -50%",
//         scrub:3,
//     }
// })
// gsap.to("#page2",{
   
//     opacity:1,
//     scrollTrigger:{
//         trigger:"#effect",
//         scroller:"body",
//         start:"top -10%",
//         end:"top -50%",
//         scrub:3,
//     }
// })

gsap.from(".play0",{
    left:"25%",
    duration:1,
    scrollTrigger:{
        trigger:".play0",
        scroller:"body",
        start:"top 40%",
        end:"top 80%",
        scrub:3,
    }


})
gsap.from(".des0",{
    scale:.8,
    opacity:0,
    duration:.5,
    delay:1,
    scrollTrigger:{
        trigger:".des0",
        scroller:"body",
        start:"top 20%",
        end:"top 60%",
        scrub:3,
    }
})
gsap.from("#word1",{
    top:"550px",
    duration:1,
    delay:3,
})
gsap.to("#word-1",{
    top:"-300px",
    duration:1,
    delay:2.5,
})
gsap.from("#word-1",{
    top:"300px",
    duration:1,
    delay:0.8,
})
gsap.from("#word3",{
    top:"550px",
    duration:1,
    delay:3,
})
gsap.to("#word-3",{
    top:"-300px",
    duration:1,
    delay:2.5,
})
gsap.from("#word2",{
    top:"550px",
    duration:1,
    delay:0.8,
})
gsap.from("#word-3",{
    top:"300px",
    duration:1,
    delay:0.8,
})



// gsap.from("#line1",{
//     left:"-800px",
//     duration:1,
//     delay:0.8,
// })
// gsap.to("#line1",{
//     left:"800px",
//     duration:1,
//     delay:1.2,
// })
