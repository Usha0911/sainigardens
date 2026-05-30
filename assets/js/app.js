const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

/* SHOW SLIDE */

function showSlide(i){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[i].classList.add("active");
    dots[i].classList.add("active");
}
/* NEXT */

function nextSlide(){

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide(index);
}

/* PREVIOUS */

function prevSlide(){

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    showSlide(index);
}

/* BUTTON EVENTS */

nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);

/* AUTO SLIDE */

setInterval(nextSlide,4000);

/* DOT EVENTS */

dots.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        index = i;
        showSlide(index);

    });

});
// 
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click',()=>{

    navLinks.classList.toggle('active');

});
   
// 


