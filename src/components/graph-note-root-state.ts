import State from '../state';

export default function (app) {
  return State.create({
    name: 'init',
    data: {
      init: {
        welcomeVisible: true
      },
      // we can explicitly define state here
      // or we can omit stateData for this state
      // and use actions to create from initial state
      create: null,
    },
    actions: {
      init: {
        toggleElement: (stateData) => {
          return Object.assign({}, stateData, {
            welcomeVisible: false,
          });
        },
      },
      create: {
        toggleElement: (stateData) => {
          return Object.assign({}, stateData, {
            welcomeVisible: true,
          });
        },
      },
    }
  });
}
