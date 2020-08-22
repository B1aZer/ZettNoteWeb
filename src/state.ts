import Observable from './utils/observable.js';
import {uuid} from './utils/common';

export default (function(Observable) {

let instances = new WeakMap();

class State {

  app: any;
  name: string;
  data: Object;
  actions: Object;
  private observable: Observable;
  stateHistory: any;

  constructor(app, obj) {
    this.app = app;
    this.name = obj.name || '';
    this.data = obj.data || {};
    this.actions = obj.actions || {};
    // TODO: Proxy can be used to track changes
    this.observable = new Observable();
    this.stateHistory = new Map();
    // save init state
    this.app.on('graph-note-init', () => {
      this.changeComponentStateTo('init');
    });
    this.app.on('graph-note-history-change-state', (key) => {
      this.loadHistory(key);
    });
  }
  static create(app, obj) {
    if (!instances.has(obj)) {
      let instance = new State(app, obj);
      instances.set(obj, instance);
    }
    return instances.get(obj);
  }
  getData() {
    return this.data;
  }
  getName() {
    return this.name;
  }
  on(name, f) {
    this.observable.on(name, f);
  }
  /* This method chages state data,
   * but leaves component state intact,
   * You should manually call changeComponentStateTo
   * to change state
   *
   * Method supports async actions
   */
  async runComponentAction(actionName, obj) {
    console.info(`=== Component action ${actionName} start ===`);
    console.info(`=== ${actionName} state name ${this.name} ===`);
    console.info(`=== ${actionName} state dt ${this.data} ===`);
    console.info(`=== ${actionName} from`);
    console.info(this.data);
    try {
      this.data = await this.actions[this.name][actionName](this.getData(), obj);
    } catch (e) {
      switch (e.constructor) {
        case TypeError:
          throw new Error(`There is no ${actionName} action in ${this.getName()} state`);
          break;
        default:
          throw e;
      }
    }
    console.info(`=== ${actionName} to ===`);
    console.info(this.data);
    console.info(`=== Component action ${actionName} finish ===`);
    return this.data;
  }
  /* This methdod does not change state data in any way,
   * we have actions for that,
   * It saves current state and transitions state
   */
  changeComponentStateTo(newState, save=true) {
    // copy data to a new state
    //if (this.name === newState) return;
    this.name = newState;
    if (save) this.saveHistory();
    this.observable.fireEvent(newState);
    this.observable.fireEvent('*');
    // TODO: move to renderer
    // this will write to to history on each component change
    // we can create start state history method to control state more elegantly
    // TODO: history
    //let h = uuid(this.state.name);
    // {name: getName, data: getDate}
    /*
    this.stateHistory[h] = this.getData();
    this.app.history.saveState(h, this.getData());
    */
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
  }
  saveHistory() {
    let h = uuid(this.getName());
    // 1. this creates a potential memory leak
    // we probably can use weakmap since value can be any object, class or weakmap
    // and use {h: h} as key, but how to save this key for retrieval?
    // 2. we can only save all state (with all actions)
    // because state (and it's actions) can be changed at any time
    this.stateHistory.set(h, {name: this.name, data: this.data});
    console.info(this.data);
    this.app.history.saveState(h);
  }
  loadHistory(key) {
    let stateObj = this.stateHistory.get(key);
    // if no state found by this hash in state history
    if (!stateObj) return;
    console.info(stateObj.data);
    this.data = Object.assign({}, this.data, stateObj.data);
    this.changeComponentStateTo(stateObj.name, false);
    this.observable.fireEvent('*');
    //this.observable.fireEvent('history');
  }
}

return State;

})(Observable)
