import html from './graph-note-add-btn.html';
import Component from './component.js';

export default class AddBtnComponent extends Component {
  construct() {
    this.name = 'graph-note-add-btn';
    this.dom = this.renderFragment(html);
  }
  bindEvents() {
    //TODO: split event, state and DOM

    let addBtn = this.el('.graph-note-add');

    addBtn.addEvent('click', (e) => {
      this.state.note_adding = !this.state.note_adding;
      if (this.state.note_adding) {
        addBtn.textContent = 'check';
        this.app.fireEvent('graph-note-add', e);
      } else {
        addBtn.textContent = 'mode_edit';
        this.app.fireEvent('graph-note-create', e);
      }
    });
  }
  bindListeners() {
  }
}
