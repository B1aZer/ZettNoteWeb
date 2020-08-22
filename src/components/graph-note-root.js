import html from './graph-note-root.html';
import Component from './component';
import AddBtnComponent from './graph-note-add-btn';
import CreateScreenComponent from './graph-note-create-screen';
import UpdateScreenComponent from './graph-note-create-screen-update';
import NodeListComponent from './graph-note-list';
import RootState from './graph-note-root-state';

export default class RootComponent extends Component {

  // This class unaware of renderer and uses component

  init() {
    this.name = 'graph-note-root';
    this.state = RootState(this.app);
    this.dom = this.renderFragment(html.interpolate(this.state.getData()));
    this.components = [AddBtnComponent, CreateScreenComponent, UpdateScreenComponent, NodeListComponent];
  }
  initState() {
    // TODO: for info only
    // STATE
    // ow to access from other comp?
    // how to subscribe local storage?
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
    this.app.on('graph-note-add', async () => {
      await this.state.runComponentAction('toggleElement');
      // TODO: we can use this method in actions
      // either in api runComponentAction(name, newState,Name)
      // or in action definition
      this.state.changeComponentStateTo('create');
    });
    this.app.on('graph-note-list-element-edit', async () => {
      await this.state.runComponentAction('toggleElement');
      this.state.changeComponentStateTo('update');
    });
    this.app.on('graph-note-created', async () => {
      await this.state.runComponentAction('toggleElement');
      this.state.changeComponentStateTo('init');
    });
  }
  bindListeners() {
    let welcomeEl = this.el('.graph-note-welcome');
    let listEl = this.el('graph-note-list');
    let createEl = this.el('graph-note-create-screen');
    let updateEl = this.el('graph-note-create-screen-update');
    this.state.on('create', () => {
      welcomeEl.classList.add('scale-out');
      welcomeEl.classList.add('hide');
      listEl.classList.add('scale-out');
      listEl.classList.add('hide');
      createEl.classList.remove('hide');
    });
    this.state.on('update', () => {
      welcomeEl.classList.add('scale-out');
      welcomeEl.classList.add('hide');
      listEl.classList.add('scale-out');
      listEl.classList.add('hide');
      updateEl.classList.remove('hide');
    });
    this.state.on('init', () => {
      welcomeEl.classList.remove('scale-out');
      welcomeEl.classList.remove('hide');
      listEl.classList.remove('hide');
      listEl.classList.remove('scale-out');
      createEl.classList.add('hide');
      updateEl.classList.add('hide');
    });
  }
}
