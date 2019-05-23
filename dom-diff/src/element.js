
class Element {
  constructor (type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

function createElement (type, props, children) {
  return new Element(type, props, children)
}

// public method setAttribute
function setAttr (node, key, value) {
  switch (node) {
    case 'value':  // 是input 或者 textarea
      if (node.tagName.toUpperCase() === 'INPUT' || node.tagName.toUpperCase() === 'TEXTAREA') {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
      break
    case 'style':
      node.style.cssText = value
      break
    default:
      node.setAttribute(key, value)
      break
  }
}

// render
function render (eleObj) {
  let el = document.createElement(eleObj.type)
  for (let key in eleObj.props) {
    setAttr(el, key, eleObj.props[key])
  }
  eleObj.children.forEach((child) => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child)
    el.append(child)
  })
  return el
}

// vertualDom to realDom
function renderDom (el, target) {
  target.appendChild(el)
}
export {createElement, render, Element, renderDom}
