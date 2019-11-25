import $ from 'jquery';
import hamburger from './hamburger';
import dropdown from './dropdown';
import tab from './tab';
import todoList from './todoList';
import './css/reset.css';
import './css/index.scss';


$(() => {
  hamburger();
  dropdown();
  tab();
  todoList();
});
