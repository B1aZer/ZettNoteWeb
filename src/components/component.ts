import Observable from '../utils/observable.js';
import {uuid} from '../utils/common';

export default (function(document, Observable) {

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
    stateHistory: any;
    observable: Observable;

    constructor(app, state={}) {
      this.app = app;
      this.renderer = app.renderer;
      this.name = '';
      this.dom = null;
      this.components = [];

      // READ ONLY
      // pass state to child components
      this.state = state;
      // tracks state for each component
      this.stateHistory = {};

      // TODO: Proxy can be used to track changes
      this.observable = new Observable();

      // TODO: abstract
      // if not child component, state empty
      if (Object.keys(state).length === 0) {
        Object.defineProperty(this.state, 'name', {
          value: 'init',
          writable: true,
        });

        Object.defineProperty(this.state, 'data', {
          enumerable: true,
          writable: true,
        });

        Object.defineProperty(this.state, 'on', {
          value: (name, f) => this.observable.on(name, f),
          writable: false,
        });

        // TODO: add actions
      }

      // private
      this.constructComponents();

      this.bindEvents();
      this.mutateState();
      this.bindListeners();

      // TODO: history TEST
      /*
      this.app.on('graph-note-history-change', () => {
        let h = this.app.history.getStateData().hash;
        console.info(h);
        console.info(this.stateHistory);
        console.warn(this.stateHistory[h]);
        if (this.stateHistory[h]) {
          this.changeComponentStateTo(this.stateHistory[h], false);
        }
      });
       */
    }
    init() {
      // This method is implemented by children
      // creates DOM from html
    }
    // *** STATE ***
    // TODO: move this methods to state class
    // this.getStateData -> this.state.getData()
    initState() {
      // This method is implemented by children
    }
    getStateData() {
      return this.state.data[this.state.name];
    }
    getStateName() {
      return this.state.name;
    }
    /* This method chages state data,
     * but leaves component state intact,
     * You should manually call changeComponentStateTo
     * to change state
     */
    runComponentAction(actionName) {
      this.state.data[this.state.name] = this.state.actions[this.state.name][actionName](this.getStateData());
    }
    /* This methdod does not change state data in any way,
     * we have actions for that,
     * It saves current state and transitions state
     */
    changeComponentStateTo(newState, save=true) {
      this.observable.fireEvent(newState);
      this.state.name = newState;
      // TODO: move to renderer
      // this will write to to history on each component change
      // we can create start state history method to control state more elegantly
      // TODO: history
      /*
      let h = uuid(this.state.name);
      if (save) {
        this.stateHistory[h] = this.state.name;
        this.app.history.saveState(this.state, h);
      }
       */
    }
      /*
    changeComponentStateTo_v0(newState) {
      let hash = new Hash(); //or index
      this.prev = this.prev.slice(1,this.prev.lenth);
      this.prev = {
        stateData = this.stateData;
      }
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
    // *** END STATE ***
    constructComponents() {
      this.initState();
      this.init();
      this.renderComponents();
    }
    el(q) {
      // TODO: to renderer
      // what is queryselector, component does not know that
      let element = this.dom.querySelector(q);
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
      // component -> DOM el
      let rendered = this.dom;
      return rendered;
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
        let baseCmp = new comp(this.app, this.state);
        let baseNode = this.renderer.queryCmpv2(this.dom, baseCmp.name);
        this.renderer.append(baseCmp.render(), baseNode);
      }
    }
  }

  return Component;

})(document, Observable)
