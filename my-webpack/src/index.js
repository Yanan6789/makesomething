// polyfill 回转义所有的
// import '@babel/polyfill'
import data from './data.json';

console.log('Hello Webpack');
console.log(data);

import './css/main.scss';
import bimaqiu from './assets/images/bimaqiu.png'

const showMsg = () => {
  alert('Hello');
};

window.showMsg = showMsg;