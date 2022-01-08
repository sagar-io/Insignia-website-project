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