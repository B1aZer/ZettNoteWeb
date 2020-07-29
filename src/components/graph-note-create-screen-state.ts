import State from '../state';

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
  return State.create(state);
}
