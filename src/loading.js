import $ from 'jquery';

const loading = () => {
  const item = '[data-js-selector=loading]';
  const $item = $(item);
  const $body = $('body');
  const activeClass = 'loading--active';
  const fixedClass = 'fixed';
  const loadingSec = 1000;

  const removeActive = () => {
    $body.removeClass(fixedClass);
    $item.removeClass(activeClass);
  }

  setTimeout(removeActive, loadingSec);

};

export default loading;
