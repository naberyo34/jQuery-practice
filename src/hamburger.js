import $ from 'jquery';

function hamburger() {
  /**
   * セレクタ
   */
  const $icon = $('[data-js=hamburger__icon]');
  const $wrapper = $('[data-js=hamburger__wrapper]');
  const $body = $('body');

  const icon = '[data-js=hamburger__icon]';

  /**
   * クリックイベント
   */
  const handleClick = () => {
    const iconActive = 'header__hamburger--isActive'
    const wrapperActive = 'hamburger__wrapper--isActive'
    const fixed = 'isFixed';

    // toggleClass は 「あれば外す、なければ付ける」を勝手にやってくれる
    $icon.toggleClass(iconActive);
    $wrapper.toggleClass(wrapperActive);
    $body.toggleClass(fixed);
  };

  /**
   * イベントの設定
   */
  $body
    .on('click', icon, handleClick);
}

export default hamburger;
