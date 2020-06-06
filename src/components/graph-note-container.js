import html from './graph-note-container.html';
import Component from './component.js';
import AddBtnComponent from './graph-note-add-btn.js';
import CreateScreenComponent from './graph-note-create-screen.js';
import NodeListComponent from './graph-note-list.js';

export default class ContainerComponent extends Component {

  // This class unaware of renderer and uses component

  construct() {
    this.name = 'graph-note-container';
    this.dom = this.renderFragment(html);
    this.components = [AddBtnComponent, CreateScreenComponent, NodeListComponent];
  }
  bindEvents() {
  }
  mutateState() {
  }
  bindListeners() {
    // Materialize init
    let elems = this.el('.fixed-action-btn');
    let instances = this.app.M.FloatingActionButton.init(elems, []);

    let welcomeEl = this.el('.graph-note-welcome');
    let listEl = this.el('.graph-note-node-list');

    this.app.on('graph-note-add', () => {
      welcomeEl.classList.add('scale-out');
      listEl.classList.add('scale-out');
      listEl.classList.add('hide');
    });
    this.app.on('graph-note-create', () => {
      welcomeEl.classList.remove('scale-out');
      listEl.classList.remove('hide');
      listEl.classList.remove('scale-out');
    });
  }
}
