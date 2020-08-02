import './graph-note-create-screen.css';
import html from './graph-note-create-screen.html';
import Component from './component';
import CreateScreenState from './graph-note-create-screen-state';

export default class CreateScreenComponent extends Component {

  // TODO: This class unaware of renderer and uses component

  init() {
    this.name = 'graph-note-create-screen';
    this.state = CreateScreenState(this.app);
    this.dom = this.renderFragment(html);
  }
  bindEvents() {
    let noteHeader = this.el('.graph-note-header');
    let noteText = this.el('.graph-note-text');
    noteHeader.addEvent('change', () => {
      this.app.fireEvent('graph-note-create-screen-update-state');
    });
    this.cm = this.app.CodeMirror.fromTextArea(noteText, {
      linenumbers: true,
      mode: "markdown",
    });
    this.cm.on('change', () => {
      this.app.fireEvent('graph-note-create-screen-update-state');
    });
  }
  bindListeners() {

    let createEl = this.el('.graph-note-create-screen');
    let noteHeader = this.el('.graph-note-header');
    let noteText = this.el('.graph-note-text');

    /*
      let parentsChips = this.el('.chips-autocomplete');

      let chipsInstance;

      let chipOptions = {
        placeholder: 'Parents',
        autocompleteOptions: {
          limit: Infinity,
          minLength: 1
        }
      };

      this.app.on('graph-note-init', (e) => {
        chipOptions.autocompleteOptions.data = this.generateChipTags();
        chipsInstance = this.app.M.Chips.init(parentsChips, chipOptions);
      });
      this.app.on('graph-note-created', (e) => {
        chipOptions.autocompleteOptions.data = this.generateChipTags();
        chipsInstance = this.app.M.Chips.init(parentsChips, chipOptions);
      });
   */

    this.app.on('graph-note-list-element-edit', async (hash) => {
      await this.state.runComponentAction('loadState', hash);
      // no, it's a local state (only while component is visble)
      this.hash = hash;
      this.app.fireEvent('graph-note-add');
      this.updateUI();
    });
    this.app.on('graph-note-add', () => {
      this.app.renderer.classRemove('hide', createEl);
      this.cm.refresh();
      this.cm.focus();
      //noteHeader.value = new Date().toLocaleDateString('en-US');
    });
    //this.app.after
    this.app.on('graph-note-create', async () => {
      await this.state.runComponentAction('updateState', {
        header: noteHeader.value,
        text: this.cm.getValue(),
      });
      await this.state.runComponentAction('saveState', this.hash);
      this.app.fireEvent('graph-note-created');
    });
    this.app.on('graph-note-created', async () => {
      this.app.renderer.classAdd('hide', createEl);
      await this.state.runComponentAction('resetState')
      this.updateUI();
      this.state.changeComponentStateTo('init');
    });
    this.app.on('graph-note-create-screen-update-state', async () => {
      let hVal = noteHeader.value;
      let tVal = this.cm.getValue();
      if (hVal && tVal) {
        this.state.changeComponentStateTo('filled');
      } else {
        this.state.changeComponentStateTo('init');
      }

    });
  }
  updateUI() {
    let noteHeader = this.el('.graph-note-header');
    let noteText = this.el('.graph-note-text');
    noteHeader.value = this.state.getData().header;
    this.cm.setValue(this.state.getData().text);
  }
  /*
  generateChipTags() {
    let objNames = {};
    for (let [uuid, nodeIns] of this.app.storage.getMap()) {
      objNames[uuid] = null;
    }
    return objNames;
  }
 */
}
