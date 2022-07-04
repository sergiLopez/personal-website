
//SCROLL NAVBAR

const links = document.querySelectorAll(".scroll_to");

links.forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block: "nearest"})
    }) 
})

const button = document.querySelector(".work-button")

button.addEventListener("click", function(e){
    e.preventDefault();
    const section = document.getElementById("about")
    section.scrollIntoView({behavior: "smooth", block: "nearest"})

})

//MOBILE RESPONSIVE
menuBurger = document.querySelector(".menu-burger");
burgerButton = document.querySelector(".burger");
listItems = document.querySelectorAll(".menu-burger a")


burgerButton.addEventListener("click", () =>{
    
    if(menuBurger.classList.contains('active')){
        console.log("EEEEEEEEEEEEEEEEEEE")
        menuBurger.classList.remove('active');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "none"
        }
    
    }else{
        console.log("AAAAAAAA")
        menuBurger.classList.add('active');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "block"
        }
    }
})



//SCROLL REVEAL

ScrollReveal().reveal('.flex-container-item', {duration: 3000, origin: 'bottom', distance: '200px'});
ScrollReveal().reveal('.flex-container-item-who',  {duration: 3000, origin: 'bottom', distance: '200px'});
ScrollReveal().reveal('#form',  {duration: 3000, origin: 'bottom', distance: '100px'});

ScrollReveal().reveal('#card1',  {rotate: {x:1, y:100}, duration: 2000});
ScrollReveal().reveal('#card2',  {rotate: {x:1, y:100}, duration: 2000,delay: 200});
ScrollReveal().reveal('#card3',  {rotate: {x:1, y:100}, duration: 2000, delay: 400});
ScrollReveal().reveal('#card4',  {rotate: {x:1, y:100}, duration: 2000, delay: 600});