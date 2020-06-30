// TODO: Split class to actual renderer and main component

export default (function(document) {

  /**
   * RendererDOM
   *
   * Class is responsible for accessing DOM API
   *
   * Sublassed by Component
   *
   */
  class RendererDOM {
    constructor(app) {
      this.app = app;
    }
    query(q) {
      return document.querySelector(q);
    }
    queryCmp(q) {
      return document.getElementsByTagName(q)[0];
    }
    queryCmpv2(doc, q) {
      return doc.querySelector(q);
    }
    classAdd(classText, node) {
      node.classList.add(classText);
    }
    classRemove(classText, node) {
      node.classList.remove(classText);
    }
    prepend(documentFragment, node) {
      let firstEl = node.firstChild;
      node.insertBefore(documentFragment, firstEl);
    }
    addEvent(name, callback) {
      this.addEventListener(name, callback);
    }
    append(documentFragment, node) {
      //TODO: make actual replace
      node.appendChild(documentFragment);
    }
    replace(documentFragment, oldNode, parentNode) {
      parentNode.replaceChild(documentFragment, oldNode);
    }
    set(text, node) {
      node.textContent = text;
    }
  }

  return RendererDOM;

})(document)
