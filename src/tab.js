import $ from 'jquery';

const tab = () => {
  const item = '[data-js-selector=tabItem]';
  const content = '[data-js-selector=tabContent]';
  const $item = $(item);
  const $content = $(content);
  const activeClass = {
    item: 'tab__item--active',
    content: 'tab__content--active'
  };
  // アクティブクラスを付け外しする関数
  const changeActive = (e) => {
    const targetIndex = $(e.target).index();

    $item.removeClass(activeClass.item);
    $content.removeClass(activeClass.content);

    $item.eq(targetIndex).addClass(activeClass.item);
    $content.eq(targetIndex).addClass(activeClass.content);
  };

  // イベントリスナ付与
  $('body').on('click', item, changeActive);
};

export default tab;
