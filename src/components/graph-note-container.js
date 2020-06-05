import html from './graph-note-container.html';
import Component from './component.js';
import AddBtnComponent from './graph-note-add-btn.js';

export default class ContainerComponent extends Component {

  // This class unaware of renderer and uses component

  construct() {
    this.name = 'graph-note-container';
    this.dom = this.renderFragment(html);
    this.components = [AddBtnComponent];

    // TODO: move to Component
    this.renderComponents();
  }
  bindEvents() {
  }
  mutateState() {
  }
  bindListeners() {
    let welcomeEl = this.el('.graph-note-welcome');
    //TODO: move to create screen component
    // let createEl = this.el('.graph-note-create-screen');
    // let iconEl = this.el('.graph-note-add');
    this.app.on('graph-note-add', () => {
      welcomeEl.classList.add('scale-out');
      // createEl.classList.remove('scale-out');
      // TODO: move to add-btn-component
      // iconEl.textContent = 'check';
    });
    /*
     * TODO:
    this.app.on('graph-note-create', () => {
      createEl.classList.add('scale-out');
      welcomeEl.classList.remove('scale-out');
      // TODO: move to add-btn-component
      iconEl.textContent = 'mode_edit';
    });
   */
  }
}
