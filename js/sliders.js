const images = document.querySelectorAll(".slide1")
const circleContainer = document.querySelector(".image-circles-container")

let slideIndex = 0

const createCircleForEachImage1 = images =>
  images.forEach(() => {
    const div = document.createElement('div')
    circleContainer.appendChild(div).classList.add('image-circle')
  })

createCircleForEachImage1(images)

const imageCircles = document.querySelectorAll('.image-circle')

const addsActiveClassInFirstCircleElement1 = circles =>
  circles[0].classList.add('carousel-active')

addsActiveClassInFirstCircleElement1(imageCircles)

const insertAttributeIDToCircles = circles =>
  circles.forEach((circle, index) => circle.setAttribute('id', `${index}`))

insertAttributeIDToCircles(imageCircles)

const showImage = () => images[slideIndex].classList.add('show-img')
const hideImages = () => images.forEach(image => image.classList.remove('show-img'))
const addClassToCurrentCircle1 = circle => circle[slideIndex].classList.add('carousel-active')
const removeClassFromCircles1 = circles =>
  circles.forEach(circle => circle.classList.remove('carousel-active'))

const slider1 = circles => circles.forEach(circle => {
  circle.addEventListener('click', event => {
    const getElementId = event.target.getAttribute('id')

    hideImages()
    removeClassFromCircles1(imageCircles)

    slideIndex = getElementId

    showImage()
    addClassToCurrentCircle1(imageCircles)
  })
})

slider1(imageCircles)