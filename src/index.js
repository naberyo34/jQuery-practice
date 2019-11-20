import $ from 'jquery';
import hamburger from './hamburger';
import dropdown from './dropdown';
import todoList from './todoList';
import './css/reset.css';
import './css/index.scss';


$(() => {
  hamburger();
  dropdown();
  todoList();
});
