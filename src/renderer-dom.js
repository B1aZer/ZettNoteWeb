// TODO: Split class to actual renderer and main component

export default (function(window, document, M) {

  /**
   * RendererDOM
   *
   * Class is responsible for accessing DOM API
   * and rendering base component
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
    bindSideEvents() {
      //TODO: move to base comp
      // materialize init
      let elems = this.query('.fixed-action-btn');
      let instances = M.FloatingActionButton.init(elems, []);

    }
    replace(documentFragment, node) {
      node.appendChild(documentFragment);
    }
    renderNodes() {
      //TODO: move to base comp
      let nodeContainer = this.queryCmp('graph-note-list');
      let nodes = this.app.storage.getMap();
      for (const [k,v] of nodes) {
        // interpolate html <= context
        //nodeContainer.appendChild(new NodeComponent(node));
        //nodeContainer.appendChild(node.header);
      }
    }
  }

  return RendererDOM;

})(window, document, window.M)
