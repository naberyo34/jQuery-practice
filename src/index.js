import $ from 'jquery';
import hamburger from './hamburger';
import dropdown from './dropdown';
import tab from './tab';
import todoList from './todoList';
import modal from './modal';
import './css/reset.css';
import './css/common.scss';


$(() => {
  hamburger();
  dropdown();
  tab();
  todoList();
  modal();
});
