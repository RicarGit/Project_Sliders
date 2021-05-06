const images4 = document.querySelectorAll(".slide4")
const imageCounter4 = document.querySelector('.image-counter4')
const circleContainer4 = document.querySelector(".image-circles-container4")
const slideImages = document.querySelector('.carousel-images.carousel4')

let slideIndex4 = 0

const createCircleForEachImage = (images) =>
  images.forEach(() => {
    const div = document.createElement('div')
    circleContainer4.appendChild(div).classList.add('image-circle4')
  })

createCircleForEachImage(images4)

const imageCircles4 = document.querySelectorAll('.image-circle4')

const addsActiveClassInFirstCircleElement = circle =>
  circle[0].classList.add('carousel-active')

addsActiveClassInFirstCircleElement(imageCircles4)

const currentImageCounter2 = () =>
  imageCounter4.textContent = `${slideIndex4 + 1}/${images4.length}`

const removeClassFromCircles = () =>
  imageCircles4.forEach(circle => circle.classList.remove('carousel-active'))

const addClassToCurrentCircle = () =>
  imageCircles4[slideIndex4].classList.add('carousel-active')

const ScrollSlider = () =>
  slideImages.addEventListener('wheel', event => {
    event.preventDefault()
    const nextImage = () => event.target.scrollBy(targetWidth, 0)
    const prevImage = () => event.target.scrollBy(-targetWidth, 0)
    const targetWidth = event.target.clientWidth

    if (event.deltaY < 0 && slideIndex4 > 0) {
      slideIndex4--
      prevImage()
      removeClassFromCircles()
      addClassToCurrentCircle()
    } else if (event.deltaY > 0 && slideIndex4 < images4.length - 1) {
      slideIndex4++
      nextImage()
      removeClassFromCircles()
      addClassToCurrentCircle()
    }

    currentImageCounter2()
  })

currentImageCounter2()
ScrollSlider()