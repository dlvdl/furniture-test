const caruselTrack = document.querySelector('#carusel-track')
const newbieTrack = document.querySelector('#newbie-track')

const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.previous')

const newbieNext = document.querySelector('#newbie-next')
const newbiePrev = document.querySelector('#newbie-prev')

const slideCounter = document.querySelector('#slide-counter')

const newbieSlides = Array.from(newbieTrack.children)
const slides = Array.from(caruselTrack.children)

const slideWidth = slides[0].getBoundingClientRect().width
const newbieSlideWidth = newbieSlides[0].getBoundingClientRect().width

let counter = 0

//Event listeners
nextButton.addEventListener('click', () => clickHandler(caruselTrack, false))
prevButton.addEventListener('click', () => clickHandler(caruselTrack, true))
newbieNext.addEventListener('click', () => {
  clickHandler(newbieTrack, false)
  showQuontityOfSlides(false)
})
newbiePrev.addEventListener('click', () => {
  clickHandler(newbieTrack, true)
  showQuontityOfSlides(true)
})

//Utility
const setSlidePosition = (element, index) => {
  element.style.left = `${slideWidth * index}px`
}

const showQuontityOfSlides = (back) => {
  //back - true if we want to see previous slide else false
  const [firsInd, secondInd] = slideCounter.children
  if (back) {
    if (counter > 1) {
      --counter
    }
  } else {
    if (counter < newbieSlides.length) {
      ++counter
    }
  }

  firsInd.innerText = `0${counter}`
  secondInd.innerText =
    newbieSlides.length > 9
      ? `${newbieSlides.length}`
      : `0${newbieSlides.length}`
}

showQuontityOfSlides()
slides.forEach(setSlidePosition)
newbieSlides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
}

const clickHandler = (track, back) => {
  //back - true if we want to see previous slide else false

  const currentSlide = track.querySelector('.current-slide')

  if (back) {
    const previousSlide = currentSlide.previousElementSibling
    moveToSlide(track, currentSlide, previousSlide)
    return
  }

  const nextSlide = currentSlide.nextElementSibling
  moveToSlide(track, currentSlide, nextSlide)
}
