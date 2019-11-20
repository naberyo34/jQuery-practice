import $ from 'jquery';

function dropdown() {
  /**
   * セレクタ
   */

  const $body = $('body');

  const column = '[data-js=dropdown__menuColumn]';
  const itemList = '[data-js=dropdown__itemList]';
  const isActive = 'dropdown__itemList--isActive';

  /**
   * ホバーイベント
   */
  const handleMouseEnter = event => {
    const $target = $(event.currentTarget); // currentTargetなので注意
    $target.find(itemList).addClass(isActive);
    console.log($target);
  };

  const handleMouseLeave = event => {
    const $target = $(event.currentTarget);
    $target.find(itemList).removeClass(isActive);
    console.log($target);
  };

  /**
   * イベントの設定
   */
  $body
    .on('mouseenter', column, handleMouseEnter)
    .on('mouseleave', column, handleMouseLeave);
}

export default dropdown;
