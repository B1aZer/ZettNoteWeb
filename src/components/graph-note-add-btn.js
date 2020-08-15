import html from './graph-note-add-btn.html';
import Component from './component';
import RootState from './graph-note-root-state';

export default class AddBtnComponent extends Component {
  init() {
    this.name = 'graph-note-add-btn';
    this.dom = this.renderFragment(html);
    this.state = RootState(this.app);
  }
  bindEvents() {
    let addBtn = this.el('.graph-note-add');

    addBtn.addEvent('click', () => {
      (this.state.getName() === 'init')
        ? this.app.fireEvent('graph-note-add')
        : this.app.fireEvent('graph-note-create');
    });
  }
  bindListeners() {
    let addBtn = this.el('.graph-note-add');
    this.state.on('create', () => {
      addBtn.textContent = 'check';
    })
    this.state.on('init', () => {
      addBtn.textContent = 'mode_edit';
    })
  }
}
