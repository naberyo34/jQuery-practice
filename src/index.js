import $ from 'jquery';
import hamburger from './hamburger';
import dropdown from './dropdown';
import accordion from './accordion';
import tab from './tab';

import './css/reset.css';
import './css/common.scss';


$(() => {
  hamburger();
  dropdown();
  accordion();
  tab();
});
