const track = document.querySelector('.carusel_track')
const slides = Array.from(track.children)

const slideWidth = slides[0].getBoundingClientRect().width
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.previous')

const newbieNext = document.querySelector('#newbie-next')
const newbiePrev = document.querySelector('#newbie-prev')

//Event listeners

nextButton.addEventListener('click', () => {
  console.log('sdsd')
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling

  moveToSlide(track, currentSlide, nextSlide)
})

prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide')
  const previousSlide = currentSlide.previousElementSibling

  moveToSlide(track, currentSlide, previousSlide)
})

newbieNext.addEventListener('click', () => console.log('next'))
newbiePrev.addEventListener('click', () => console.log('prev'))

//Utility

const setSlidePosition = (element, index) => {
  element.style.left = `${slideWidth * index}px`
}

slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
}
