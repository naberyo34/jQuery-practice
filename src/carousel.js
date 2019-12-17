import $ from 'jquery';

function carousel() {
  const $firstSlide = $('[data-js=firstSlide]');

  const changeSlide = () => {
    const isActive = 'carousel__slide--isActive';
    const $isActive = $('.carousel__slide--isActive');

    if ($isActive.next().length) {
      $isActive.removeClass(isActive);
      $isActive.next().addClass(isActive);
    } else {
      $isActive.removeClass(isActive);
      $firstSlide.addClass(isActive);
    }
  };

  setInterval(changeSlide, 3000);
}

export default carousel;
