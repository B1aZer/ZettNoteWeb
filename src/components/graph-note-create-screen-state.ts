import State from '../state';
import {uuid} from '../utils/common';

export default stateWrapper;

const state = {
    name: 'init',
    data: {
      init: {
        header: null,
        text: null,
      },
      filled: null,
    },
    actions: {
      init: {
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
  let stateObj = State.create(state);
  stateObj['actions']['init']['saveState'] = (stateData) => {
    app.M.toast({html: 'Fill the header and text', classes: 'rounded'})
    return stateData;
  };
  stateObj['actions']['filled']['saveState'] = (stateData) => {
    let id = uuid(stateData.header);
    app.storage.set(id, stateData);
    return stateData;
  };
  stateObj['actions']['init']['loadState'] = (stateData, id) => {
    let newState = app.storage.get(id);
    return Object.assign(
      {}, stateData, newState
    );
  };
  return stateObj;
}
