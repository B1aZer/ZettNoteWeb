import State from '../state';
import {uuid} from '../utils/common';

export default stateWrapper;

const state = {
    name: 'init',
    data: {
      header: null,
      text: null,
    },
    actions: {
      init: {
        // Not really necessary
        // runComponentAction will trigger similar error
        updateState: (stateData, obj) => Promise.reject(
          new Error('Not allowed action in this state')
        ),
        resetState: (stateData, obj) => Promise.reject(
          new Error('Not allowed action in this state')
        ),
      },
      filled: {
        updateState: (stateData, obj) => Object.assign(
          {}, stateData, obj
        ),
        resetState: (stateData) => Object.assign(
          {}, stateData, {
            header: '',
            text: '',
          }
        )
      },
    }
}

function stateWrapper(app) {
  let stateObj = State.create(app, state);
  stateObj['actions']['init']['saveState'] = (stateData) => {
    app.M.toast({html: 'Fill the header and text', classes: 'rounded'})
    return stateData;
  };
  stateObj['actions']['filled']['saveState'] = (stateData) => {
    let id = uuid(stateData.header);
    app.storage.set(id, stateData);
    return stateData;
  };
  return stateObj;
}
