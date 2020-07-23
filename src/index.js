import $ from 'jquery';
import hamburger from './hamburger';
import dropdown from './dropdown';
import accordion from './accordion';
import tab from './tab';
import modal from './modal';
import carousel from './carousel';
import smoothScroll from './smoothScroll';

import './css/reset.css';
import './css/common.scss';


$(() => {
  hamburger();
  dropdown();
  accordion();
  tab();
  modal();
  carousel();
  smoothScroll();
});
