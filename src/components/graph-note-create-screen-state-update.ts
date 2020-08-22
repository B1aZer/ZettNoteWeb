import State from '../state';
import {uuid} from '../utils/common';

export default stateWrapper;

const state = {
    name: 'init',
    data: {
      id: null,
      header: '',
      text: '',
    },
    actions: {
      init: {
        updateState: (stateData, obj) => Object.assign(
          {}, stateData, obj
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
    app.M.toast({html: 'Not saving same text', classes: 'rounded'})
    return stateData;
  };
  stateObj['actions']['filled']['saveState'] = (stateData) => {
    if (!stateData.id) Promise.reject(new Error('No id provided'));
    app.storage.set(stateData.id, stateData);
    return stateData;
  };
  stateObj['actions']['init']['loadState'] = (stateData) => {
    if (!stateData.id) Promise.reject(new Error('No id provided'));
    let newState = app.storage.get(stateData.id);
    return Object.assign(
      {}, stateData, newState
    );
  };
  return stateObj;
}
