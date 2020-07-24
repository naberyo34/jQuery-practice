import $ from 'jquery';

const smoothScroll = () => {
  const link = '[data-js-selector=smoothScroll]';
  const scrollTop = '[data-js-sub=scrollTop]';
  const header = '[data-js-selector=header]';
  const $scrollTop = $(scrollTop);
  const $header = $(header);
  const $window = $(window);
  const activeClass = 'smoothScroll--active';
  const headerHeight = $header.innerHeight();
  const threshold = 32;
  const animationSec = 200;

  const toggleActive = () => {
    const scroll = $window.scrollTop();

    if (scroll > 120) {
      $scrollTop.addClass(activeClass);
      return;
    }
    $scrollTop.removeClass(activeClass);
  };

  const scroll = e => {
    e.preventDefault();
    const href = $(e.target).attr('href');
    const $targetElement = $(href === '#' || !href ? 'html' : href);
    const targetPosition = $targetElement.offset().top;

    $('html').animate(
      { scrollTop: targetPosition - headerHeight - threshold },
      animationSec,
      'swing'
    );
  };

  // イベントリスナ付与
  $window.on('scroll', toggleActive);
  $('body').on('click', link, scroll);
};

export default smoothScroll;
