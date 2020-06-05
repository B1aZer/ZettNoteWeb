import html from './graph-note-add-btn.html';
import Component from './component.js';

export default class AddBtnComponent extends Component {
  construct() {
    this.name = 'graph-note-add-btn';
    this.dom = this.renderFragment(html);
  }
  bindEvents() {
    let addBtn = this.el('.graph-note-add');
    //TODO: this event depend on other DOM fragment graph-note-create-screen
    // we can inobtusivly firevent from this fragment depending on current state
    //
    // but how do we pass data from other coponent, we can't access it from this component
    //let noteHeader = this.el('.graph-note-header');
    //let noteText = this.el('.graph-note-text');
    addBtn.addEvent('click', (e) => {
      this.app.fireEvent('graph-note-add', e);
    });

    /*
      if (e.target.textContent === 'mode_edit') {
        this.app.fireEvent('graph-note-add');
      } else if (e.target.textContent === 'check'){
        this.app.fireEvent('graph-note-create', {
          header: noteHeader.value,
          note: noteText.value,
        });
      }
    });
   */
  }
  mutateState() {
    this.app.on('graph-note-add', (e) => {
      this.state.note_adding = true;
      this.app.fireEvent('graph-note-adding', this.state);
    });
  }
  bindListeners() {
    /*
    this.app.on('graph-note-adding', (e) => {
      this.state.note_adding = true;
    });
   */
  }
}
