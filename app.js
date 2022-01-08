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

console.log(lastTestimonialItem.getBoundingClientRect())


let item = 500; 
let item2 = 250;

function makeSwipe(arg) {

    if(arg === 1){
    if(lastTestimonialItem.getBoundingClientRect().left < 1000) return;
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