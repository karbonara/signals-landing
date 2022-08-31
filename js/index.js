$('.reviews__slider').slick({
  infinite: true,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
  ]
});
const UpBtn = document.querySelector('.footer__up-button');
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    UpBtn.classList.add('footer__up-button-show');
  } else {
    UpBtn.classList.remove('footer__up-button-show')
  }
})