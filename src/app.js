import $ from 'jquery';

$(() => {

  /**
   * セレクタ
   */
  const $list = $('[data-js=list]');

  // 以下はjQueryセレクタではないので注意
  const listItem = '[data-js=listItem]';
  const addButton = '[data-js=addButton]';
  const removeButton = '[data-js=removeButton]';
  const checkBox = '[data-js=checkBox]';

  // アイテム番号 handleClickAddが発火する度に1増える
  let itemNum = 1;

  /**
   * イベントの発火時に実行する関数
   */
  const handleClickAdd = () => {
    const item = `
      <li class="list__item" data-js="listItem">
        <input type="checkbox" class="checkBox" data-js="checkBox">
        <p>ITEM${itemNum}</p>
        <button class="removeButton" data-js="removeButton">remove</button>
      </li>
      `;

    $list.append(item);
    itemNum += 1;
  };

  const handleClickRemove = (event) => {
    const $target = $(event.target);
    $target.closest(listItem).remove();
  };

  const handleChangeCheckBox = (event) => {
    const $target = $(event.target);
    if ($target.prop('checked')) {
      $target.closest(listItem).addClass('checked');
    } else {
      $target.closest(listItem).removeClass('checked');
    }
  };

  /**
   * 各DOM要素にイベントを設定
   */
  $('body')
    .on('click', addButton, handleClickAdd)
    .on('click', removeButton, handleClickRemove)
    .on('change', checkBox, handleChangeCheckBox);
});
