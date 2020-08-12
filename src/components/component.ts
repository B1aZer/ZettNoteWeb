import {uuid} from '../utils/common';

export default (function(document) {

  /*
   * Component
   *
   * This class is unaware of DOM and only uses renderer
   *
   */

  class Component {
    app: any;
    renderer: any;
    name: String;
    dom: any;
    components: Array<typeof Component>;
    state: any;
    props: any;

    constructor(app, props=null) {
      this.app = app;
      this.renderer = app.renderer;
      this.name = '';
      this.dom = null;
      this.components = [];

      // redefined in children
      this.state = null;

      // passed during initialization
      this.props = props;

      // private
      this.constructComponents();

      this.bindEvents();
      this.mutateState();
      this.bindListeners();

    }
    init() {
      // This method is implemented by children
      // creates DOM from html
    }
    constructComponents() {
      this.init();
      this.renderComponents();
    }
    el(q) {
      // TODO: to renderer
      // what is queryselector, component does not know that
      let element = this.renderer.querySelector(this.dom, q);
      element.addEvent = this.renderer.addEvent.bind(element);
      return element;
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
      // impure, async db, dom manipulations
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
      // component (state) -> DOM el
    }
    // TODO move to render
    renderComponents() {
      // component <- DOM elements from inner components
      //
      // this method would take renderer API and render inner components to self
      // let el = new GraphNoteCreateScreen();
      // this.renderer(el.class, el.render())
      //
      // cmp.render actually uses api.renderer
      // this creates a lot of additional deps
      //
      for (let comp of this.components) {
        let baseCmp = new comp(this.app);
        let baseNode = this.renderer.queryCmpv2(this.dom, baseCmp.name);
        this.renderer.append(baseCmp.dom, baseNode);
      }
    }
  }

  return Component;

})(document)
