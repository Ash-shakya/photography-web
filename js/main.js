const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#nextBtn');
const prev = document.querySelector('#prevBtn');
const intervalTime = 5000;
const auto = false;
let slideInterval;

const nextSlide = () => {
  
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else{
        slides[0].classList.add('current');
    }
};

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length -1].classList.add('current');
    }
};

next.addEventListener('click', e=> {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval= setInterval(nextSlide,intervalTime);
    }
});
prev.addEventListener('click', e=> {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval= setInterval(nextSlide,intervalTime);
    }
});

if(auto){
 slideInterval= setInterval(nextSlide,intervalTime);
};


const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.navbar-nav li');

const navSlide = () => {
    burger.addEventListener('click', () => {
        console.log('hi');
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5+ 0.5}s`;
            // console.log(index);
            }
        });
        burger.classList.toggle('cross');
    });

}


navSlide();
