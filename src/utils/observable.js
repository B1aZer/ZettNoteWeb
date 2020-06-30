const interceptors = new Map();
// TODO: create a state history
// each fireEvent creates new state with extState
// save each state based either on Class that fired state or page
const states = new Map();

let stateStart = 0;

export default class Observable {
  constructor() {
    this.listeners = new Map();
  }
  on(name, f) {
    if (!this.listeners.has(name)) {
      this.listeners.set(name, new Set());
    }
    this.listeners.get(name).add(f);
    return this.off(name, f);
  }
  // bofore,after,...
  //TODO: rename to tap?
  intercept(name, f) {
    //ony one interecpt is allowed to eliminate race conditions
    if (interceptors.has(name)) {
      throw new Error('Only one interceptor is allowed!');
    }
    interceptors.set(name, f);
  }
  off(name, f) {
    // TODO
    if (this.listeners.has(name)) {
      this.listeners.get(name);
    }
  }
  fireEvent(name) {
    if (this.listeners.has(name)) {
      for (let f of this.listeners.get(name)) {
        if (interceptors.has(name)) {
          f(interceptors.get(name)());
        } else {
          f();
        }
      }
    }
  }
  state(name, extData) {
    switch(name) {
      case 'state-back':
        stateStart -= extData; //TODO < 0
      //TODO dirtyhack
        var {name: eventName, extData: eventData} = states.get(stateStart);
        this.fireEvent(eventName, eventData, false);
        break;
      case 'state-forward':
        stateStart += extData; //TODO mod max
        var {name: eventName, extData: eventData} = states.get(stateStart);
        this.fireEvent(eventName, eventData, false);
        break;
    }
  }
}
