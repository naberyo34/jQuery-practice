import $ from 'jquery';

const hamburger = () => {
  const icon = '[data-js-selector=hamburger]';
  const $icon = $(icon);
  const activeClass = 'hamburger--active';
  // アクティブクラスを付け外しする関数
  const toggleActive = () => {
    $icon.toggleClass(activeClass);
  };

  // イベントリスナ付与
  $('body').on('click', icon, toggleActive);
};

export default hamburger;
