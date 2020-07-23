import $ from 'jquery';

const smoothScroll = () => {
  const link = '[data-js-selector=smoothScroll]';
  const header = '[data-js-selector=header]';
  const $link = $('[data-js-selector=smoothScroll]');
  const $header = $(header);
  const $window = $(window);
  const activeClass = 'smoothScroll--active';
  const headerHeight = $header.innerHeight();
  const threshold = 32;
  const animationSec = 200;

  const toggleActive = () => {
    const scroll = $window.scrollTop();

    if (scroll > 120) {
      $link.addClass(activeClass);
      return;
    }
    $link.removeClass(activeClass);
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
