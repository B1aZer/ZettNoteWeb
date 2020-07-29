import State from '../state';

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
        resetState: (stateData) => Object.assign(
          {}, stateData, {
            header: null,
            text: null,
          }
        )
      },
    }
}

export default function (app) {
  return State.create(state);
}
