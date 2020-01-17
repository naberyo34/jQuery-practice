import $ from 'jquery';

function hamburger() {
  /**
   * セレクタ
   */
  const $icon = $('[data-js=hamburger__icon]');
  const $wrapper = $('[data-js=hamburger__wrapper]');
  const $body = $('body');

  const icon = '[data-js=hamburger__icon]';
  const wrapper = '[data-js=hamburger__wrapper]';

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

  const handleWrapperClick = () => {
    const iconActive = 'header__hamburger--isActive'
    const wrapperActive = 'hamburger__wrapper--isActive'
    const fixed = 'isFixed';

    // wrapperをクリックしたら問答無用でactiveが外れる
    $icon.removeClass(iconActive);
    $wrapper.removeClass(wrapperActive);
    $body.removeClass(fixed);
  }

  /**
   * イベントの設定
   */
  $body
    .on('click', icon, handleClick)
    .on('click', wrapper, handleWrapperClick);
}

export default hamburger;
