const images4 = document.querySelectorAll(".slide4")
const circleContainer4 = document.querySelector(".image-circles-container4")
const imageCounter4 = document.querySelector('.image-counter2')


images4.forEach(() => {
  const div = document.createElement('div')
  circleContainer4.appendChild(div).classList.add('image-circle4')
})

const imageCircles4 = document.querySelectorAll('.image-circle4')
imageCircles4[0].classList.add('carousel-active')

imageCircles4.forEach((circle, index) => circle.setAttribute('id', `${index}`))

let slideIndex4 = 0

const currentImageCounter4 = () =>
  imageCounter4.textContent = `${Number(slideIndex4) + 1}/${images4.length}`

let automaticSlider4 = () => {
  slideIndex4++

  if (slideIndex4 > images4.length - 1) {
    slideIndex4 = 0
  }
  images4.forEach(image => image.classList.remove('show-img'))
  imageCircles4.forEach(circle => circle.classList.remove('carousel-active'))

  imageCircles4[slideIndex4].classList.add('carousel-active')
  images4[slideIndex4].classList.add('show-img')

  currentImageCounter4()
}

let slideTimer4 = setInterval(automaticSlider4, 2000)

imageCircles4.forEach(circle => {
  circle.addEventListener('click', (event) => {
    clearInterval(slideTimer4)

    images4.forEach(image => image.classList.remove('show-img'))
    imageCircles4.forEach(circle => circle.classList.remove('carousel-active'))

    slideIndex4 = event.target.getAttribute('id')
    images4[slideIndex4].classList.add('show-img')
    circle.classList.add('carousel-active')

    slideTimer4 = setInterval(automaticSlider4, 2000)
    currentImageCounter4()
  })
})
currentImageCounter4()
