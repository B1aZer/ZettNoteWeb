import Observable from './utils/observable.js';

export default (function(Observable) {

let instances = new WeakMap();

class State {
  name: string;
  data: Object;
  actions: Object;
  private observable: Observable;

  constructor(obj) {
    this.name = obj.name || '';
    this.data = obj.data || {};
    this.actions = obj.actions || {};
      // TODO: Proxy can be used to track changes
      this.observable = new Observable();
      // TODO: tracks state for each component
      //this.stateHistory = {};
      // TODO: history TEST
      /* this.app.on('graph-note-history-change', () => {
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
  static create(obj) {
    let instance;
    if (!instances.has(obj)) {
      instance = new State(obj);
      instances.set(obj, instance);
    }
    return instances.get(obj);
  }
  getData() {
    return this.data[this.name];
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
    console.info(this.name);
    console.info(this.data[this.name]);
    try {
      this.data[this.name] = await this.actions[this.name][actionName](this.getData(), obj);
    } catch (e) {
      if (e instanceof TypeError) {
        throw new Error(`There is no ${actionName} action in ${this.getName()} state`);
      } else {
        throw e;
      }
    }
    console.info(`=== Component action ${actionName} finish ===`);
    return this.data[this.name];
  }
  /* This methdod does not change state data in any way,
   * we have actions for that,
   * It saves current state and transitions state
   */
  changeComponentStateTo(newState, save=true) {
    this.observable.fireEvent(newState);
    this.name = newState;
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
}

return State;

})(Observable)
