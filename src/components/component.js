import Observable from '../utils/observable.js';

export default (function(document, Observable) {

  /*
   * Component
   *
   * TODO: This class is unaware of DOM and only uses renderer
   *
   */

  class Component {
    constructor(app, state={}) {
      this.app = app;
      this.renderer = app.renderer;
      this.name = '';
      this.dom = null;
      this.components = [];

      this.state = {};
      //TODO: https://redux.js.org/recipes/implementing-undo-history
      this.stateHistory = {
        past: [],
        present: null,
        future: [],
      }

      // TODO: use proxy to possibly see any changes
      //
      this.observable = new Observable();

      // TODO: abstract
      Object.defineProperty(this.state, 'name', {
        value: null,
        writable: true,
      });

      Object.defineProperty(this.state, 'data', {
        value: {},
        writable: true,
      });

      Object.defineProperty(this.state, 'on', {
        value: (name, f) => this.observable.on(name, f),
        writable: true,
      });


      // this.state.data
      //this.stateData = {};
      // this.state.actions
      //this.stateActions = {};
      //possibly merge wiht above
      this.stateActionsOnExit = {};
      this.stateActionsOnEnter = {};

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
    changeComponentStateTo(newState) {
      this.observable.fireEvent(newState);
      this.state.name = newState;
      // TODO: move to renderer
      // this will write to to history on each component change
      // we can create start state history to control state more elegantly
      console.info(this.state);
      window.history.pushState({}, this.state.name, this.state.name);
    }
    /*
    changeComponentStateTo(newState) {
      let hash = new Hash(); //or index
      this.prev = this.prev.slice(1,this.prev.lenth);
      this.prev = {
        stateData = this.stateData;
      j
      //push history change 
      History[hash] = this.prev;
      for action in this.onExit() {
        action()
      }
      this.sate = newState;
      for action in this.onEnter() {
        action()
      }
      this.pres = this.state;
    }
   */
    constructComponents() {
      this.init();
      this.renderComponents();
    }
    getState() {
      //TODO
      return this.state;
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

})(document, Observable)
