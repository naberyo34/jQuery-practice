$ = require('jquery');

$(() => {
  // リストにアイテムを追加 ====================
  addListItem = () => {
    const $addButton = $('.js-addButton');
    const $list = $('.js-list');
    let itemNum = 1;

    $addButton.click(() => {
      const item = `
      <li class="list__item">
        <input type="checkbox" class="checkBox js-checkBox">
        <p>ITEM${itemNum}</p>
        <button class="removeButton js-removeButton">remove</button>
      </li>
      `;
      // アイテムを追加する
      $list.append(item);
      itemNum += 1;
    });
  };

  // 動的に追加されるアイテムにイベントを追加 ====================
  addListItemEvent = () => {
    // 削除ボタンのclickイベントを追加する
    $(document).on('click', '.js-removeButton', () => {
      // アロー関数を使うとjQueryっぽいthisの使い方ができなくなるのでevent.targetを使う
      const $target = $(event.target);

      $target.parent().remove();
    });

    // チェックボックスのchangeイベントを追加する
    $(document).on('change', '.js-checkBox', () => {
      const $target = $(event.target);

      if ($target.prop('checked')) {
        $target.parent().addClass('checked');
      } else {
        $target.parent().removeClass('checked');
      }
    });
  };

  addListItem();
  addListItemEvent();
});
