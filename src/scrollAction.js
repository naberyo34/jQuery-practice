import $ from 'jquery';

const scrollAction = () => {
  const item = '[data-js-selector=scrollAction]';
  const $item = $(item);
  const $window = $(window);
  const activeClass = 'scrollAction--active';
  const windowHeight = $window.height();
  const threshold = 64;

  // アクティブクラスを付け外しする関数
  const addActive = () => {
    const scroll = $window.scrollTop();

    $item.each(function() {
      const $this = $(this);
      const targetPosition = $this.offset().top;
      if (scroll > targetPosition - windowHeight + threshold) {
        $this.addClass(activeClass);
      }
    })
  };

  // イベントリスナ付与
  $window.on('scroll', addActive);
};

export default scrollAction;
