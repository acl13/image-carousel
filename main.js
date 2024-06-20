const carousel = document.querySelector('.carousel');
const carouselWidth = carousel.offsetWidth;
const slides = document.querySelectorAll('.slide');
const slidesArray = Array.from(slides);
const btnOne = document.getElementById('position-one');
const btnTwo = document.getElementById('position-two');
const btnThree = document.getElementById('position-three');
const btnFour = document.getElementById('position-four');
const jumpButtons = document.querySelectorAll('.jump-button');

jumpButtons[0].classList.add('active');

function clearButtons() {
    jumpButtons.forEach((button) => {
        button.classList.remove('active');
    })
}

slides.forEach((slide) => {
        let slideIndex = slidesArray.indexOf(slide);
        let nextBtn = document.createElement('button');
        let previousBtn = document.createElement('button');
        nextBtn.textContent = '>';
        previousBtn.textContent = '<';
        nextBtn.classList.add('next');
        previousBtn.classList.add('previous');
        slide.appendChild(nextBtn);
        slide.appendChild(previousBtn);


    const next = () => {
        if(slideIndex === (slidesArray.length - 1)) {
            slides.forEach((slide) => {
                slide.style.transform = 'translateX(0px)';
            })
            clearButtons();
            jumpButtons[0].classList.add('active');
        } else {
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${carouselWidth * (slideIndex + 1)}px)`;
            })
            clearButtons();
            jumpButtons[slideIndex + 1].classList.add('active');
        }
      
    }

    const previous = () => {
        if(slideIndex === (0)) {
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${carouselWidth * (slidesArray.length -1)}px)`;
            })
            clearButtons();
            jumpButtons[slidesArray.length - 1].classList.add('active');

        } else {
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${carouselWidth * (slideIndex - 1)}px)`;
            })
            clearButtons();
            jumpButtons[slideIndex - 1].classList.add('active');
        }
    }

    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);
});


const moveToSlide = function(position) {
    slides.forEach((slide) => {
         slide.style.transform = `translateX(-${carouselWidth * position}px)`;
    })
}

btnOne.addEventListener('click', () => {
    moveToSlide(0);
});

btnTwo.addEventListener('click', () => {
    moveToSlide(1);
});

btnThree.addEventListener('click', () => {
    moveToSlide(2);
});

btnFour.addEventListener('click', () => {
    moveToSlide(3);
});

let num = 1; 
const scrollSlides = setInterval(() => {
  if (num === 4) {
    num = 0; 
  }  
  moveToSlide(num);
  num += 1;
}, 5000);

document.addEventListener('click', () => {
    clearInterval(scrollSlides);
})

