const images3 = document.querySelectorAll(".slide3")

let slideIndex3 = 0

let automaticSlider = () => {
  slideIndex2++

  if (slideIndex3 > images3.length - 1) {
    slideIndex3 = 0
  }
  images2.forEach(image => image.classList.remove('show-img'))
  imageCircles2.forEach(circle => circle.classList.remove('carousel-active'))

  imageCircles2[slideIndex2].classList.add('carousel-active')
  images2[slideIndex2].classList.add('show-img')
}

let slideTimer = setInterval(automaticSlider, 2000);

imageCircles2.forEach(circle => {
  circle.addEventListener('click', (event) => {
    clearInterval(slideTimer)
    slideTimer = setInterval(automaticSlider, 2000);

    images2.forEach(image => image.classList.remove('show-img'))
    imageCircles2.forEach(circle => circle.classList.remove('carousel-active'))

    slideIndex2 = event.target.getAttribute('id')
    images2[slideIndex2].classList.add('show-img')
    circle.classList.add('carousel-active')
  })

})
