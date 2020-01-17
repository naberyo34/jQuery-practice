import $ from 'jquery';
import hamburger from './hamburger';
import dropdown from './dropdown';
import tab from './tab';
import todoList from './todoList';
import modal from './modal';
import carousel from './carousel';
import loading from './loading';
import pageTop from './pageTop';

import './css/reset.css';
import './css/common.scss';


$(() => {
  hamburger();
  dropdown();
  tab();
  todoList();
  modal();
  carousel();
  loading();
  pageTop();
});
