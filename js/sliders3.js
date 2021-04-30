const images3 = document.querySelectorAll(".slide3")
const imageCounter = document.querySelector('.image-counter')
const nextButton = document.querySelector('.next-button')
const previousButton = document.querySelector('.prev-button')

let slideIndex3 = 0

const currentImageCounter = () =>
  imageCounter.textContent = `${slideIndex3 + 1}/${images3.length}`

const removeClassFromImages = () =>
  images3.forEach(image => image.classList.remove('show-img'))

const addClassToImages = () =>
  images3[slideIndex3].classList.add('show-img')

const nextImage = () => {
  slideIndex3++

  if (slideIndex3 > images3.length - 1) {
    slideIndex3 = 0
  }

  removeClassFromImages()
  addClassToImages()
  currentImageCounter()
}

const prevImage = () => {
  slideIndex3--

  if (slideIndex3 < 0) {
    slideIndex3 = images3.length - 1
  }

  removeClassFromImages()
  addClassToImages()
  currentImageCounter()
}

currentImageCounter()
nextButton.addEventListener('click', nextImage)
previousButton.addEventListener('click', prevImage)
