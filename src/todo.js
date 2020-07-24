import $ from 'jquery';

const todo = () => {
  const tab = '[data-js-selector=todoTab]';
  const list = '[data-js-selector=todoList]';
  const input = '[data-js-selector=todoInput]';
  const incompleteList = '[data-js-sub=todoIncomplete]';
  const completeList = '[data-js-sub=todoComplete]';
  const addButton = '[data-js-selector=todoAdd]';
  const finishButton = '[data-js-selector=todoFinish]';
  const deleteButton = '[data-js-selector=todoDelete]';
  const item = '[data-js-selector=todoItem]';
  const $tab = $(tab);
  const $list = $(list);
  const $input = $(input);
  const activeClass = {
    tab: 'todo__tabItem--active',
    list: 'todo__list--active',
  };
  const changeTab = e => {
    const targetIndex = $(e.target).index();

    $tab.removeClass(activeClass.tab);
    $list.removeClass(activeClass.list);

    $tab.eq(targetIndex).addClass(activeClass.tab);
    $list.eq(targetIndex).addClass(activeClass.list);
  };

  const addTask = e => {
    console.log('発火');
    e.preventDefault();

    const inputValue = $input.val();

    if (!inputValue) {
      alert('タスクを入力してください');
      return;
    }

    // XSS対策(雑)
    const replacedValue = inputValue
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    const todoItemDom = `<li class="todo__item" data-js-selector="todoItem"><p>${replacedValue}</p><div class="todo__itemMenu"><a class="todo__itemButton" data-js-selector="todoFinish">完了</a><a class="todo__itemButton" data-js-selector="todoDelete">削除</a></div></li>`;
    $(todoItemDom).appendTo(incompleteList);
    $input.val('');
  };

  const finishTask = e => {
    const $targetButton = $(e.target);
    const $target = $targetButton.parents(item);
    $targetButton.remove();
    $target.appendTo(completeList);
  };

  const deleteTask = e => {
    const $target = $(e.target).parents(item);
    $target.remove();
  };

  // イベントリスナ付与
  $('body')
    .on('click', tab, changeTab)
    .on('click', addButton, addTask)
    .on('click', finishButton, finishTask)
    .on('click', deleteButton, deleteTask);
};

export default todo;
