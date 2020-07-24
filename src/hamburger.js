import $ from 'jquery';

const hamburger = () => {
  const icon = '[data-js-selector=hamburger]';
  const menu = '[data-js-selector=menu]';
  const $icon = $(icon);
  const $menu = $(menu);
  const activeClass = {
    icon: 'hamburger--active',
    menu: 'menu--active',
  };
  // アクティブクラスを付け外しする関数
  const toggleActive = () => {
    $icon.toggleClass(activeClass.icon);
    $menu.toggleClass(activeClass.menu);
  };

  // イベントリスナ付与
  $('body').on('click', icon, toggleActive);
};

export default hamburger;
