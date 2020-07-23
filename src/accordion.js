import $ from 'jquery';

const accordion = () => {
  const item = '[data-js-selector=accordion]';
  const content = '[data-js-selector=accordionContent]';
  const activeClass = 'accordion--active';
  const animationSec = 200;
  // アクティブクラスを付け外しする関数
  const toggleActive = e => {
    const $target = $(e.currentTarget);
    $target.toggleClass(activeClass);
    $target.find(content).slideToggle(animationSec);
  };

  // イベントリスナ付与
  $('body').on('click', item, toggleActive);
};

export default accordion;
