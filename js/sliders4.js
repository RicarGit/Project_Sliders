const slideImages = document.querySelector('.carousel-images.carousel4')

slideImages.addEventListener('wheel', event => {
  event.preventDefault()

  targetWidth = event.target.clientWidth

  if (event.deltaY > 0) {
    event.target.scrollBy(targetWidth, 0)
  } else {
    event.target.scrollBy(-targetWidth, 0)
  }
})