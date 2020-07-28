import State from '../state';

export default function (app) {
  return State.create({
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
  });
}
