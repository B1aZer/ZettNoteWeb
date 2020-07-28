import './graph-note-create-screen.css';
import html from './graph-note-create-screen.html';
import Component from './component';
import GraphNode from '../graph-node';
import CreateScreenState from './graph-note-create-screen-state';

export default class CreateScreenComponent extends Component {

  // TODO: This class unaware of renderer and uses component

  init() {
    this.name = 'graph-note-create-screen';
    this.state = CreateScreenState(this.app);
    this.dom = this.renderFragment(html);
  }
  bindEvents() {
    let noteText = this.el('.graph-note-text');
    this.cm = this.app.CodeMirror.fromTextArea(noteText, {
      linenumbers: true,
      mode: "markdown",
    });
    this.cm.on('change', () => {
      this.state.changeComponentStateTo('dirty');
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

    this.app.on('graph-note-add', (e) => {
      this.app.renderer.classRemove('hide', createEl);
      this.cm.refresh();
      this.cm.focus();
      noteHeader.value = new Date().toLocaleDateString('en-US');
    });
    this.app.on('graph-note-create', () => {
      this.state.runComponentAction('resetState');
      this.state.changeComponentStateTo('init');
      this.app.renderer.classAdd('hide', createEl);
      // Move everything below to a seprate component
      // It seems there is misunderstanding between copmonent state
      // and storage state.
      // Do we really need storage state to component and access it
      // with component.getStateData() ?
      /*
      if (!noteText.value) return;
      let graphNode = new GraphNode({
        header: noteHeader.value,
        text: noteText.value,
        //parents: chipsInstance.chipsData.map(x => x.tag),
      });
      this.app.storage.set(graphNode.uuid, graphNode);
     */
      this.app.fireEvent('graph-note-created');
    });
    this.app.on('graph-note-created', () => {
      noteHeader.value = '';
      noteText.value = '';
    });
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
