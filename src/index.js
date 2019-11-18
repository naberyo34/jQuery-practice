import $ from 'jquery';
import hamburger from './hamburger';
import todoList from './todoList';
import './css/reset.css';
import './css/index.scss';

$(() => {
  hamburger();
  todoList();
});
