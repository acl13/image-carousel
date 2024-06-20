const carousel = document.querySelector('.carousel');
const carouselWidth = carousel.offsetWidth;
const slides = document.querySelectorAll('.slide');
const slidesArray = Array.from(slides);
const btnOne = document.getElementById('position-one');
const btnTwo = document.getElementById('position-two');
const btnThree = document.getElementById('position-three');
const btnFour = document.getElementById('position-four');

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

        } else {
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${carouselWidth * (slideIndex + 1)}px)`;
            })
        }
    }

    const previous = () => {
        if(slideIndex === (0)) {
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${carouselWidth * (slidesArray.length -1)}px)`;
            })

        } else {
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${carouselWidth * (slideIndex - 1)}px)`;
            })
        }
    }

    nextBtn.addEventListener('click', next);
    previousBtn.addEventListener('click', previous);
});





