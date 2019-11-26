import $ from 'jquery';

function todoList() {
  /**
   * セレクタ
   */
  const $list = $('[data-js=todo__list]');

  // 以下はjQueryセレクタではないので注意
  const listItem = '[data-js=todo__listItem]';
  const addButton = '[data-js=todo__addButton]';
  const removeButton = '[data-js=todo__removeButton]';
  const checkBox = '[data-js=todo__checkBox]';

  // アイテム番号 handleClickAddが発火する度に1増える
  let itemNum = 1;

  /**
   * イベントの発火時に実行する関数
   */
  const handleClickAdd = () => {
    const item = `
      <li class="todo__listItem" data-js="todo__listItem">
        <input type="checkbox" class="todo__checkBox" data-js="todo__checkBox">
        <p>ITEM${itemNum}</p>
        <button class="button todo__removeButton" data-js="todo__removeButton">remove</button>
      </li>
      `;

    $list.append(item);
    itemNum += 1;
  };

  const handleClickRemove = event => {
    const $target = $(event.target);
    $target.closest(listItem).remove();
  };

  const handleChangeCheckBox = event => {
    const $target = $(event.target);
    if ($target.prop('checked')) {
      $target.closest(listItem).addClass('todo__listItem--checked');
    } else {
      $target.closest(listItem).removeClass('todo__listItem--checked');
    }
  };

  /**
   * 各DOM要素にイベントを設定
   */
  $('body')
    .on('click', addButton, handleClickAdd)
    .on('click', removeButton, handleClickRemove)
    .on('change', checkBox, handleChangeCheckBox);
}

export default todoList;
