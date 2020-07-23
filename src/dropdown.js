import $ from 'jquery';

const dropdown = () => {
  const item = '[data-js-selector=dropdownItem]';
  const subItems = '[data-js-selector=dropdownSubItems]';
  const $subItems = $(subItems);
  const activeClass = 'dropdown__subItems--active';
  // アクティブクラスを付け外しする関数
  const addActive = e => {
    const $targetSubItems = $(e.target).children(subItems);
    $targetSubItems.addClass(activeClass);
  };

  const removeActive = () => {
    $subItems.removeClass(activeClass);
  }

  // イベントリスナ付与
  $('body')
    .on('mouseenter', item, addActive)
    .on('mouseleave', item, removeActive);
};

export default dropdown;
