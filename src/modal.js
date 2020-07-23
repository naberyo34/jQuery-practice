import $ from 'jquery';

const modal = () => {
  const item = '[data-js-selector=modal]';
  const button = '[data-js-selector=modalButton]';
  const $item = $(item);
  const $body = $('body');
  const activeClass = 'modal--active';
  const fixedClass = 'fixed';
  let scrollTop;
  // アクティブクラスを付け外しする関数
  const toggleActive = () => {
    if ($body.hasClass(fixedClass)) {
      $body.removeClass(fixedClass).css({ top: 0 });
      $item.removeClass(activeClass);
      window.scrollTo(0, scrollTop);
      return;
    }

    scrollTop = $(window).scrollTop();
    $body.addClass(fixedClass).css({ top: -scrollTop });
    $item.addClass(activeClass);
  };

  // イベントリスナ付与
  $body.on('click', button, toggleActive);
};

export default modal;
