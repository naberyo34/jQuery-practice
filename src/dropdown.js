import $ from 'jquery';

const dropdown = () => {
  const item = '[data-js-selector=dropdownItem]';
  const subItems = '[data-js-selector=dropdownSubItems]';
  const $subItems = $(subItems);
  const animationSec = 200;
  const slideDown = e => {
    const $targetSubItems = $(e.target).children(subItems);
    $targetSubItems.slideDown(animationSec);
  };

  const slideUp = () => {
    $subItems.stop();
    $subItems.slideUp(animationSec);
  }

  // イベントリスナ付与
  $('body')
    .on('mouseenter', item, slideDown)
    .on('mouseleave', item, slideUp);
};

export default dropdown;
