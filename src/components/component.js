export default (function(document) {

  //TODO: This class is unaware of DOM and only uses renderer
  // HOW CAN IT USE IT?

  class Component {
    constructor(app, state={}) {
      console.info(this);
      this.app = app;
      // TODO: Render is not defined here (startup of Render class)
      this.renderer = app.renderer;
      this.state = state;
      this.name = '';
      // TODO: can be not dom, rename
      this.dom = null;
      this.components = [];

      this.construct();
      this.bindEvents();
      this.bindListeners();
    }
    construct() {
      // pass
    }
    el(q) {
      //TODO to renderer
      // what is queryselector?
      let element = this.dom.querySelector(q);
      element.addEvent = this.addEvent.bind(element);
      return element;
    }
    addEvent(name, callback) {
      // to renderer
      this.addEventListener(name, callback);
    }
    bindEvents() {
      // pass
      // Side (DOM) -> App
      // state unaware only fires events
    }
    mutateState() {
      // we can mutate state here based on event
      // TODO:
      // do we need this mthod since we don't have
      // automatic state -> DOM bindings
      // and we actually dont need them because we don't depend on DOM
    }
    bindListeners() {
      // pass
      // App -> Side (DOM, Canvas, DB)
      // we can probably merge mutateState here
      //
      // Every component only responsible for it's own state
      // We can fire diifferent event on each step (mutateState fires ith state obj)
      //
      // TODO: do we neeed tapable here ?
      //
      // All states are saved in FireState db to make state management
      // We can also store state as global object and pass it between components.
    }
    renderFragment(html) {
      // TODO: move to renderer, rename
      return document.createRange().createContextualFragment(html);
    }
    render() {
      // component -> DOM el
      let rendered = this.dom;
      return rendered;
    }
    // TODO move to render
    renderComponents(t) {
      // component <- DOM elements from inner components
      //
      // this method would take renderer API and render inner components to self
      // let el = new GraphNoteCreateScreen();
      // this.renderer(el.class, el.render())
      //
      // cmp.render actually uses api.renderer
      // too much deps
      //
      for (let comp of this.components) {
        let baseCmp = new comp(this.app);
        let baseNode = this.renderer.queryCmpv2(this.dom, baseCmp.name);
        //TODO: use renderer
        this.renderer.replace(baseCmp.render(), baseNode);
        //btnCmpNode.appendChild(btnCmp.render());
      }
    }
  }

  return Component;

})(document)
