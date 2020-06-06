export default (function(document) {

  /*
   * Component
   *
   * TODO: This class is unaware of DOM and only uses renderer
   *
   */

  class Component {
    constructor(app, state={}) {
      this.app = app;
      // TODO: Render is not defined here (startup of Render class)
      this.renderer = app.renderer;
      this.state = state;
      this.name = '';
      // TODO: can be not dom, rename
      this.dom = null;
      this.components = [];

      this.constructComponents();
      this.bindEvents();
      this.mutateState();
      this.bindListeners();
    }
    construct() {
      // pass
    }
    constructComponents() {
      this.construct();
      this.renderComponents();
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
      // pure
      //
      // Side (DOM) -> App
      // state unaware only fires events
    }
    mutateState() {
      // pure: state -> new state
      //
      // we can mutate state here based on event
      //
      // e => state change
      //
      // TODO:
      // do we need this mthod since we don't have
      // automatic state -> DOM bindings
      // and we actually dont need them because we don't depend on DOM
    }
    bindListeners() {
      // impure, async db,dom manipulations
      //
      // state => manipulation
      //
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
        this.renderer.append(baseCmp.render(), baseNode);
        //btnCmpNode.appendChild(btnCmp.render());
      }
    }
  }

  return Component;

})(document)
