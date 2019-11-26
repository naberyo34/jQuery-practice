import $ from 'jquery';

function modal() {
  /**
   * セレクタ
   */
  const $wrapper = $('[data-js=modal__wrapper]');
  const $body = $('body');
  const button = '[data-js=modal__button]';

  /**
   * クリックイベント
   */
  const handleClick = () => {
    const wrapperActive = 'modal__wrapper--isActive';
    const fixed = 'isFixed';

    // toggleClass は 「あれば外す、なければ付ける」を勝手にやってくれる
    $wrapper.toggleClass(wrapperActive);
    $body.toggleClass(fixed);
  };

  /**
   * イベントの設定
   */
  $body.on('click', button, handleClick);
}

export default modal;
