function helperDOMFUnction(element, id, cssClass, content) {
  const el = document.createElement(element);
  el.setAttribute('id', id);
  el.classList.add = cssClass;
  ele.textContent = content;
  return el;
}

export { helperDOMFUnction };
