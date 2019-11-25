import $ from 'jquery';

function tab() {
  /**
   * セレクタ
   */

  const $body = $('body');

  const menu = '[data-js=tab__menu]';
  const menuIsActive = 'tab__menu--isActive';
  const contentIsActive = 'tab__content--isActive';

  /**
   * クリックイベント
   */
  const handleClick = event => {
    const $target = $(event.target);
    const contentId = $target.attr('data-contentId');
    const $targetContent = $(`[data-js=${contentId}]`);

    $target.siblings().removeClass(menuIsActive);
    $target.addClass(menuIsActive);

    $targetContent.siblings().removeClass(contentIsActive);
    $targetContent.addClass(contentIsActive);
  };

  /**
   * イベントの設定
   */
  $body
    .on('click', menu, handleClick);
}

export default tab;
