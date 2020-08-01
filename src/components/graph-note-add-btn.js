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
      if (this.state.getName() === 'init') {
        this.app.fireEvent('graph-note-add');
      } else {
        this.app.fireEvent('graph-note-create');
      }
    });
  }
  bindListeners() {
    let addBtn = this.el('.graph-note-add');
    this.app.on('graph-note-add', () => {
      addBtn.textContent = 'check';
    })
    this.app.on('graph-note-create', () => {
      addBtn.textContent = 'mode_edit';
    })
  }
}
