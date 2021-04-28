const images = document.querySelectorAll(".slide1")
const circleContainer = document.querySelector(".image-circles-container")

images.forEach(() => {
  const div = document.createElement('div')
  circleContainer.appendChild(div).classList.add('image-circle')
})

const imageCircles = document.querySelectorAll('.image-circle')
imageCircles[0].classList.add('carousel-active')

imageCircles.forEach((circle, index) => circle.setAttribute('id', `${index}`))

let slideIndex = 0

imageCircles.forEach(circle => {

  circle.addEventListener('click', (event) => {

    images.forEach(image => image.classList.remove('show-img'))
    imageCircles.forEach(circle => circle.classList.remove('carousel-active'))

    slideIndex = event.target.getAttribute('id')
    images[slideIndex].classList.add('show-img')
    circle.classList.add('carousel-active')
  })
})
