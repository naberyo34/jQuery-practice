import $ from 'jquery';
import hamburger from './hamburger';
import dropdown from './dropdown';

import './css/reset.css';
import './css/common.scss';


$(() => {
  hamburger();
  dropdown();
});
