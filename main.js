ScrollReveal({
    reset: false,
    distance: '300px',
    duration: 2500,
    delay: 400,
    viewFactor: 1
   
});

ScrollReveal().reveal('.text-about', {delay: 0, viewFactor: 0.7, origin: 'left', duration: 1500})
ScrollReveal().reveal('.skills-about', {delay: 0, origin: 'right', duration: 1500})

/*********  images projects  **********/ 

ScrollReveal().reveal('.project-1', {delay: 0, origin: 'left', duration: 1500})
ScrollReveal().reveal('.project-2', {delay: 270, duration: 1500})
ScrollReveal().reveal('.project-3', {delay: 540, origin: 'right', duration: 1500})


ScrollReveal().reveal('.under-line',{delay: 200, origin: 'right', duration: 1500})

ScrollReveal().reveal('.form', {delay: 0, distance: 0, viewFactor: 0.7, duration: 2000})