import './graph-note-create-screen.css';
import html from './graph-note-create-screen.html';
import Component from './component';
import CreateScreenState from './graph-note-create-screen-state';

export default class CreateScreenComponent extends Component {

  cm: any;
  noteHeader: any;
  noteText: any;

  init() {
    this.name = 'graph-note-create-screen';
    this.state = CreateScreenState(this.app);
    this.dom = this.renderFragment(html);
    // UI
    this.noteHeader = this.el('.graph-note-header');
    this.noteText = this.el('.graph-note-text');
    this.cm = this.app.CodeMirror.fromTextArea(this.noteText, {
      linenumbers: true,
      mode: "markdown",
    });
  }
  bindEvents() {
    this.noteHeader.addEvent('change', () => {
      this.app.fireEvent('graph-note-create-screen-update-text');
    });
    this.cm.on('change', (cm, attrs) => {
      // do not trigger change if changed by api
      if (attrs.origin === 'setValue') return;
      this.app.fireEvent('graph-note-create-screen-update-text');
    });
  }
  mutateState() {
    this.app.on('graph-note-create-screen-update-text', async () => {
      let hVal = this.noteHeader.value;
      let tVal = this.cm.getValue();
      await this.state.runComponentAction('updateState', {
        header: hVal,
        text: tVal,
      });
      (hVal && tVal)
        ? this.state.changeComponentStateTo('filled')
        : this.state.changeComponentStateTo('init');
    });
    this.app.on('graph-note-add', () => {
      this.noteHeader.value = new Date().toLocaleDateString('en-US');
    });
    this.app.on('graph-note-create', async () => {
      await this.state.runComponentAction('saveState');
      this.app.fireEvent('graph-note-created');
    });
    this.app.on('graph-note-created', async () => {
      await this.state.runComponentAction('resetState')
      this.state.changeComponentStateTo('init');
    });
  }
  bindListeners() {

    let createEl = this.el('.graph-note-create-screen');

    // TODO: history
    // save state
    this.state.on('*', () => {
      console.info('render');
      this.render()
    });

    // load state
    this.app.on('graph-note-history-change-state', (h) => {
      this.state.runComponentAction('updateState', this.stateHistory[h]);
    });
    /*
     * chips logic
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

  }
  prepeareTextarea() {
    this.cm.refresh();
    this.noteHeader.focus();
  }
  render() {
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
