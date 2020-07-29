import State from '../state';

export default stateWrapper;

// We need to define state as const outside of function
// or WeakMap won't treat it as the same object
const state = {
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
};

function stateWrapper(app) {
  return State.create(state);
}
