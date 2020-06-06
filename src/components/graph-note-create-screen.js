import './graph-note-create-screen.css';
import html from './graph-note-create-screen.html';
import Component from './component.js';

export default class CreateScreenComponent extends Component {

  // TODO: This class unaware of renderer and uses component

  construct() {
    this.name = 'graph-note-create-screen';
    this.dom = this.renderFragment(html);
  }
  bindListeners() {

    let createEl = this.el('.graph-note-create-screen');
    let noteHeader = this.el('.graph-note-header');
    let noteText = this.el('.graph-note-text');

    this.app.on('graph-note-add', (e) => {
      this.app.renderer.classRemove('hide', createEl);
    });
    this.app.on('graph-note-create', () => {
      this.app.renderer.classAdd('hide', createEl);
      if (!noteText.value) return;
      this.app.storage.set(noteHeader.value, noteText.value);
      this.app.fireEvent('graph-note-created', {header: noteHeader.value, text: noteText.value});
      noteHeader.value = '';
      noteText.value = '';
    });
  }
}
