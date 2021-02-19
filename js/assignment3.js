var slides = document.querySelector('.slides');
var slide = document.querySelectorAll('.slides li');
var currentIdx = 0;
var slideCount = slide.length;
var slideWidth = 300;
var slideMargin = 30;
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');  

slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

function moveSlide(num){
    slides.style.left = -num * 330 + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount-3){
        moveSlide(currentIdx + 1);
    }
    // }else{
    //     moveSlide(0);
    // }
});
prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    }
    // }else{
    //     moveSlide(slideCount-3);
    // }
});
