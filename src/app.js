$ = require('jQuery');

$(() => {
  // リスト追加
  generateListItem = () => {
    const $addButton = $('.addButton');
    const $list = $('.list');
    let itemNum = 1;

    $addButton.click(() => {
      const item = `
      <li class="list__item">
        <input type="checkbox" class="js-checkBox">
        <p>ITEM${itemNum}</p>
        <button class="removeButton js-removeButton">remove</button>
      </li>
      `;

      // 新たなアイテムに削除ボタンのclickイベントを追加する
      $list.on('click', '.js-removeButton', () => {
        const $target = $(event.target);

        $target.parent().remove();
      });

      // 新たなアイテムにチェックボックスのchangeイベントを追加する
      $list.on('change', `.js-checkBox`, () => {
        const $target = $(event.target);

        if($target.prop('checked')) {
          $target.parent().addClass('checked');
        } else {
          $target.parent().removeClass('checked');
        }
      });

      // アイテムを追加する
      $list.append(item);
      itemNum += 1;
    });
  };

  generateListItem();
});
