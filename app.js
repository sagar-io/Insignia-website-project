const slideContainer = document.querySelector('.features');
const feature = document.querySelectorAll('.feature');

const dots = document.querySelectorAll('.features-slide-items .dot')
const lastFeature = feature[feature.length-1];

function slide(val){
    let fitSize = slideContainer.scrollWidth - window.innerWidth;
    dots.forEach(item => item.classList.remove('active'))
    if(val == 1){
    dots[1].classList.add('active');
    slideContainer.style.transform = `translate(-${Math.abs(fitSize) + 405}px)`;
    }else{
     dots[0].classList.add('active');
    slideContainer.style.transform = `translate(0)`;
    }
}

// Testimonials ====================================================

const TestimonialsSlide = document.querySelector('.testimonials');
const testimonialItems = document.querySelectorAll('.testimonial');

const lastTestimonialItem = testimonialItems[testimonialItems.length - 1];
const firstTestimonialItem = testimonialItems[0];

console.log(lastTestimonialItem.getBoundingClientRect());

const roundsTesti = document.querySelectorAll('.round');

let item = 500; 
let item2 = 250;

function makeSwipe(arg) {

    if(arg === 1){
    if(lastTestimonialItem.getBoundingClientRect().left < (window.innerWidth / 2)) return;
    TestimonialsSlide.style.transform = `translate(-${item}px)`;
    item += 500;
    item2-= 250;
    }
    
    else{
    if(firstTestimonialItem.getBoundingClientRect().right > (window.innerWidth / 2)) return;
    item -= 500;
    TestimonialsSlide.style.transform = `translate(${item2}px)`;
    item2 += 250;
    }
}

function handleSwipeDot(val) {
    roundsTesti.forEach(item => item.classList.remove('activate'));
    roundsTesti[val - 1].classList.add('activate');

    switch(val){
        case 1:
            TestimonialsSlide.style.transform = `translate(0px)`;
        break;
        case 2:
            TestimonialsSlide.style.transform = `translate(-${window.innerWidth / 2 }px)`;
        break;
        case 3:
        TestimonialsSlide.style.transform = `translate(-${window.innerWidth }px)`;
         break;
         case 4:
        TestimonialsSlide.style.transform = `translate(-${window.innerWidth + (window.innerWidth / 2)}px)`;
        break;
    }
}



const menu = document.querySelector('header ul');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerIconStrip = hamburgerIcon.querySelectorAll('.strip');


const lastStrip = hamburgerIconStrip[2];
const firstStrip = hamburgerIconStrip[0];
const midStrip = hamburgerIconStrip[1];

let indicator = true;

function handleMoboMenu() {
    indicator  = !indicator;
    if(!indicator){
        midStrip.style.opacity = '0';
        firstStrip.style.transform = `translate(8%,-62%) rotate(-35deg)`;
        lastStrip.style.transform = ` rotate(35deg)`;
        menu.style.transform = `translate(0)`
    }
    else{
        midStrip.style.opacity = '1';
        firstStrip.style.transform = `translate(0) rotate(0deg)`;
        lastStrip.style.transform = ` rotate(0)`;
        menu.style.transform = `translate(100%)`;
    }
}







hamburgerIcon.addEventListener('click', handleMoboMenu);