// mobile nav
let barsIcon = document.querySelector(".bars-button");
let mobileNav = document.querySelector(".Mobile-menu ol");
let closeButton = document.querySelector(".Close-button button");


barsIcon.addEventListener("click", () => {
    mobileNav.style.left = "50%";
})
closeButton.addEventListener("click", () => {
    mobileNav.style.left = "100%";

})
// -----------------------
// form 
let loginIcon = document.querySelectorAll(".login-button");
let form = document.querySelector(".form");
let owerlay = document.querySelector(".owerlay");

loginIcon.forEach((element) => {
    element.addEventListener("click", () => {
        form.style.display = "block";
        owerlay.style.display = "block";

        let timesIcon = document.querySelector(".form svg");
        timesIcon.addEventListener("click", () => {
            form.style.display = "none";
            owerlay.style.display = "none";
        })
    })
})

// function for animation
let addAnimation = (element, timeAnimation) => {
    let i = 0
    let Animation = setInterval(() => {
            element[i].classList.add("comAnimation");
            i++;
            if(i === element.length){
                clearInterval(Animation)
            }
        }, timeAnimation);
};
// infobar-animation
let infoBar = document.querySelectorAll(".info-content");
addAnimation(infoBar, 150);

window.addEventListener("scroll", () => {
    let height = window.scrollY;
    
    // comment-bar
    let comments = document.querySelectorAll(".com");
    
    if(height >= 2146){
        addAnimation(comments, 100)
    }
    if(height >= 3114){
        let banner = document.querySelector(".banner");
        banner.classList.add("fade-in")
    }
    
});

// slider
let leftButton = document.querySelector(".arrow-left");
let rightButton = document.querySelector(".arrow-right");
let slide = document.querySelectorAll(".sld");

let i = 0

rightButton.addEventListener("click", () => {
    slide[i].style.display = 'none';
    i++;
    if(i === slide.length){
        i = 0;
    };
    slide[i].style.display = "flex";
})
leftButton.addEventListener("click", () => {
    slide[i].style.display = 'none';
    i--;
    if(i === -1){
        i = slide.length - 1;
    };
    slide[i].style.display = "flex";
})

// fotter com
let addButton = document.querySelectorAll(".addButton");


addButton.forEach(element => {
    element.addEventListener("click", () => {
        let paragraph = element.closest(".conteiner");
        paragraph = paragraph.querySelector(".paragraph p:last-child");
        
        if(element.classList[1] === "icon-animation"){
            element.classList.remove("icon-animation");
            paragraph.classList.remove("paragraph-animation");
            paragraph.classList.add("paragraph-animation-reverse");
            paragraph.style.display = "none";
        }else{
            element.classList.add("icon-animation");
            paragraph.style.display = "block";
            paragraph.classList.remove("paragraph-animation-reverse");
            paragraph.classList.add("paragraph-animation");
        };
    })
})
