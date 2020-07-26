import html from './graph-note-add-btn.html';
import Component from './component';

export default class AddBtnComponent extends Component {
  init() {
    this.name = 'graph-note-add-btn';
    this.dom = this.renderFragment(html);
  }
  bindEvents() {
    let addBtn = this.el('.graph-note-add');

    addBtn.addEvent('click', (e) => {
      if (this.getStateName() === 'init') {
        addBtn.textContent = 'check';
        this.app.fireEvent('graph-note-add', e);
      } else {
        addBtn.textContent = 'mode_edit';
        this.app.fireEvent('graph-note-create', e);
      }
    });
  }
}
