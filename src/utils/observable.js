const listeners = new Map();
// TODO: create a state history
// each fireEvent creates new state with extState
// save each state based either on Class that fired state or page
const states = new Map();

let stateStart = 0;

export default class Observable {
  on(name, f) {
    if (!listeners.has(name)) {
      listeners.set(name, new Set());
    }
    listeners.get(name).add(f);
    return this.off(name, f);
  }
  off(name, f) {
    // TODO
    if (listeners.has(name)) {
      listeners.get(name);
    }
  }
  fireEvent(name, extData, save=true) {
    if (listeners.has(name)) {
      if (save) {
        stateStart++;
        states.set(stateStart, {name, extData});
      }
      console.info(Array.from(states));
      for (let f of listeners.get(name)) {
        f(extData);
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
