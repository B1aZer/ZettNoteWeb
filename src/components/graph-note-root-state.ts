import State from '../state';

export default stateWrapper;

// We need to define state as const outside of function
// or WeakMap won't treat it as the same object
const state = {
    name: 'init',
    data: {
      welcomeVisible: true
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
      update: {
        toggleElement: (stateData) => {
          return Object.assign({}, stateData, {
            welcomeVisible: true,
          });
        },
      },
    }
};

function stateWrapper(app) {
  return State.create(app, state);
}
