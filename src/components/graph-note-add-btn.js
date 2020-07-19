import html from './graph-note-add-btn.html';
import Component from './component';

export default class AddBtnComponent extends Component {
  init() {
    this.name = 'graph-note-add-btn';
    this.dom = this.renderFragment(html);
  }
  bindEvents() {
    //TODO: split event, state and DOM

    let addBtn = this.el('.graph-note-add');

    addBtn.addEvent('click', (e) => {
      this.state.data.note_adding = !this.state.data.note_adding;
      if (this.state.data.note_adding) {
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