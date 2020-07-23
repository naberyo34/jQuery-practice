import $ from 'jquery';

const carousel = () => {
  const prev = '[data-js-selector=carouselPrev]';
  const next = '[data-js-selector=carouselNext]';
  const contents = '[data-js-selector=carouselContents]';
  const dot = '[data-js-selector=carouselDot]';
  const $prev = $(prev);
  const $next = $(next);
  const $contents = $(contents);
  const $dot = $(dot);
  const activeClass = 'carousel__dot--active';
  const disableClass = 'carousel__button--disable';
  let currentView = 0;
  const changeView = target => {
    currentView = target;
    const scrollX = currentView * -320;

    // 前後ボタンの状態更新
    $prev.removeClass(disableClass);
    $next.removeClass(disableClass);

    if (currentView <= 0) {
      $prev.addClass(disableClass);
    }

    if (currentView >= $dot.length - 1) {
      $next.addClass(disableClass);
    }

    // ドットの状態更新
    $dot.removeClass(activeClass);
    $dot.eq(currentView).addClass(activeClass);

    $contents.css({ transform: `translateX(${scrollX}px)` });
  };

  // イベントリスナ付与
  $('body')
    .on('click', prev, () => changeView(currentView - 1))
    .on('click', next, () => changeView(currentView + 1))
    .on('click', dot, e => changeView($(e.target).index()));
};

export default carousel;
