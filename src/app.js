import $ from 'jquery';

$(() => {
  /**
   * リストにアイテムを追加
   */
  const addListItem = () => {
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
      $list.append(item);
      itemNum += 1;
    });
  };

  /**
   * 動的に追加されるアイテムにイベントを追加
   */
  const addListItemEvent = () => {
    // 削除ボタン、チェックボックスのイベントをdocumentに対してonする
    // documentは最初から必ず存在するので、**現在その要素が存在するか**関係なく設定できる
    $(document).on('click', '.js-removeButton', () => {
      const $target = $(event.target);
      $target.parent().remove();
    })
    .on('change', '.js-checkBox', () => {
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
