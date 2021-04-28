const images2 = document.querySelectorAll(".slide2")
const circleContainer2 = document.querySelector(".image-circles-container2")

images2.forEach(() => {
  const div = document.createElement('div')
  circleContainer2.appendChild(div).classList.add('image-circle2')
})

const imageCircles2 = document.querySelectorAll('.image-circle2')
imageCircles2[0].classList.add('carousel-active')

imageCircles2.forEach((circle, index) => circle.setAttribute('id', `${index}`))

let slideIndex2 = 0

let automaticSlider = () => {
  slideIndex2++

  if (slideIndex2 > images2.length - 1) {
    slideIndex2 = 0
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
