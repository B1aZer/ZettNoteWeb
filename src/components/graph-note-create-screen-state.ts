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
      dirty: null,
    },
    actions: {
      init: {
      },
      dirty: {
        updateState: (stateData, obj) => Object.assign(
          {}, stateData, obj
        ),
        resetState: (stateData) => Object.assign(
          {}, stateData, {
            header: null,
            text: null,
          }
        )
      },
    }
}

function stateWrapper(app) {
  let stateObj = State.create(state);
  stateObj['actions']['dirty']['saveState'] = (stateData) => new Promise((resolve) => {
    let id = uuid(stateData.header);
    app.storage.set(id, stateData);
    app.fireEvent('graph-note-created');
    resolve(id);
  });
  return stateObj;
}
