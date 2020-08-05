import './graph-note-create-screen.css';
import html from './graph-note-create-screen.html';
import Component from './component';
import CreateScreenState from './graph-note-create-screen-state';
import UpdateScreenState from './graph-note-create-screen-state-update';
import {uuid} from '../utils/common';

export default class CreateScreenComponent extends Component {

  // TODO: This class unaware of renderer and uses component
  cm: any;
  // TODO: rm
  id: any;
  // TODO: history
  stateHistory: Object;
  noteHeader: any;
  noteText: any;

  init() {
    this.name = 'graph-note-create-screen';
    this.state = CreateScreenState(this.app);
    this.dom = this.renderFragment(html);
    // UI
    this.noteHeader = this.el('.graph-note-header');
    this.noteText = this.el('.graph-note-text');
  }
  bindEvents() {
    this.noteHeader.addEvent('change', () => {
      this.app.fireEvent('graph-note-create-screen-update-text');
    });
    this.cm = this.app.CodeMirror.fromTextArea(this.noteText, {
      linenumbers: true,
      mode: "markdown",
    });
    this.cm.on('change', () => {
      this.app.fireEvent('graph-note-create-screen-update-text');
    });
  }
  bindListeners() {

    let createEl = this.el('.graph-note-create-screen');

    // TODO: history
    // save state
    this.state.on('*', () => {
      let h = uuid(this.state.getName());
      this.stateHistory[h] = {name: this.state.getName(), data: this.state.getData()};
      this.app.history.saveState(h);
    });

    // load state
    this.app.on('graph-note-history-change-state', (h) => {
      this.state.runComponentAction('updateState', this.stateHistory[h]);
    });

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

    this.app.on('graph-note-list-element-edit', async (id) => {
      this.state = UpdateScreenState(this.app);
      await this.state.runComponentAction('updateState', {id: id});
      await this.state.runComponentAction('loadState');
      this.updateUI();
      this.app.renderer.classRemove('hide', createEl);
      this.prepeareTextarea();
    });
    this.app.on('graph-note-add', () => {
      this.state = CreateScreenState(this.app);
      this.app.renderer.classRemove('hide', createEl);
      this.noteHeader.value = new Date().toLocaleDateString('en-US');
      this.prepeareTextarea();
    });
    this.app.on('graph-note-create', async () => {
      await this.state.runComponentAction('updateState', {
        header: this.noteHeader.value,
        text: this.cm.getValue(),
      });
      await this.state.runComponentAction('saveState');
      this.app.fireEvent('graph-note-created');
    });
    this.app.on('graph-note-created', async () => {
      this.app.renderer.classAdd('hide', createEl);
      await this.state.runComponentAction('resetState')
      this.updateUI();
      this.state.changeComponentStateTo('init');
    });
    this.app.on('graph-note-create-screen-update-text', async () => {
      let hVal = this.noteHeader.value;
      let tVal = this.cm.getValue();
      (hVal && tVal)
        ? this.state.changeComponentStateTo('filled')
        : this.state.changeComponentStateTo('init');
    });
  }
  prepeareTextarea() {
    this.cm.refresh();
    this.noteHeader.focus();
  }
  updateUI() {
    this.noteHeader.value = this.state.getData().header;
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
