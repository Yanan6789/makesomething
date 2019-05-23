
import { createElement, render, renderDom } from './element'
let vertualDom = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['a']),
  createElement('li', {class: 'item'}, ['b']),
  createElement('li', {class: 'item'}, ['c'])
])

let el = render(vertualDom)
renderDom(el, window.root)
console.log(el)
console.log(vertualDom)
