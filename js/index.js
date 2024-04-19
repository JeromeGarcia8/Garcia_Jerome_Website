gsap.registerPlugin(ScrollTrigger)

gsap.from('.hero-text', {
    xPercent: -500,
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".hero-container",

    }
});


gsap.from('.text-align-center', {
    xPercent: -300,
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".flexcontainer",
        start: "top 80%",
    }

});

gsap.from('.col-4, .container', {
    xPercent: -500,
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".text-align-right",
        start: "top 50%",

    }
});

gsap.from('.col-6', {
    xPercent: -500,
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".text-align-right",
        start: "top 50%",

    }
});




gsap.from('.header', {
    scale: 400,
    duration: 1,
    ease: "power4.out",
    

});




















