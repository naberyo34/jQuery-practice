import $ from 'jquery';

function pageTop() {
  const $html = $('html');
  const $body = $('body');
  const $window = $(window);
  const pageTop = '[data-js=pageTop]';
  const $pageTop = $(pageTop);

  $pageTop.hide();

  function handlePageTopClick() {
    const speed = 1000;
    const position = $body.offset().top;
    $html.animate({ scrollTop: position }, speed, 'swing');
  }

  function handleScroll() {
    if ($window.scrollTop() > 200) {
      $pageTop.fadeIn(200);
    } else {
      $pageTop.fadeOut(200);
    }
  }

  $body.on('click', pageTop, handlePageTopClick);
  $window.on('scroll', handleScroll);
}

export default pageTop;
