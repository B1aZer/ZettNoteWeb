import html from './graph-note-root.html';
import Component from './component.js';
import AddBtnComponent from './graph-note-add-btn.js';
import CreateScreenComponent from './graph-note-create-screen.js';
import NodeListComponent from './graph-note-list.js';

export default class RootComponent extends Component {

  // This class unaware of renderer and uses component
  //
  // State should be consistent if called outside with
  // thisComp.changeComponentStateTo(newState);

  init() {
    this.name = 'graph-note-root';
    this.dom = this.renderFragment(html);
    this.components = [AddBtnComponent, CreateScreenComponent, NodeListComponent];

    // STATE
    this.state.name = 'init';
    this.state.data = {
      init: {
        welcomeVisible: true
      },
      // we can explicitly define state here
      // or we can omit stateData for this state
      // and use actions to create from initial state
      create: null,
    }
    this.state.actions = {
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
    /*
    this.app.on('event', () => {
      // one way to change state
      this.stateActions[this.state][actionName]();
      // make DOM manipulations
      // no state change
    });
    // or
    this.app.on('event', () => {
      this.changeCompStateTo('act', onExit=(), onEnter=())
    });
    this.onStateChange(() => {
      // require branching
      // make DOM manipulations
    })
   */
  }
  bindEvents() {
    // Materialize button
    let elems = this.el('.fixed-action-btn');
    let instances = this.app.M.FloatingActionButton.init(elems, []);
  }
  mutateState() {
    this.app.on('graph-note-add', () => {
      this.state.data = this.state.actions[this.state.name].toggleElement(this.state.data);
      this.changeComponentStateTo('create');
    });
    this.app.on('graph-note-create', () => {
      this.state.data = this.state.actions[this.state.name].toggleElement(this.state.data);
      this.changeComponentStateTo('init');
    });
  }
  bindListeners() {
    let welcomeEl = this.el('.graph-note-welcome');
    let listEl = this.el('.graph-note-node-list');

    this.state.on('create', () => {
      welcomeEl.classList.add('scale-out');
      listEl.classList.add('scale-out');
      listEl.classList.add('hide');
    });
    this.state.on('init', () => {
      welcomeEl.classList.remove('scale-out');
      listEl.classList.remove('hide');
      listEl.classList.remove('scale-out');
    });
  }
}
