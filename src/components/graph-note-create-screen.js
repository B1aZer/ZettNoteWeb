import './graph-note-create-screen.css';
import html from './graph-note-create-screen.html';
import Component from './component.js';
import GraphNode from '../graph-node.js';

export default class CreateScreenComponent extends Component {

  // TODO: This class unaware of renderer and uses component

  init() {
    this.name = 'graph-note-create-screen';
    this.dom = this.renderFragment(html);
  }
  bindListeners() {

    let createEl = this.el('.graph-note-create-screen');
    let noteHeader = this.el('.graph-note-header');
    let noteText = this.el('.graph-note-text');
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

    this.app.on('graph-note-add', (e) => {
      this.app.renderer.classRemove('hide', createEl);
    });
    this.app.on('graph-note-create', () => {
      this.app.renderer.classAdd('hide', createEl);
      if (!noteText.value) return;
      let graphNode = new GraphNode({
        header: noteHeader.value,
        text: noteText.value,
        parents: chipsInstance.chipsData.map(x => x.tag),
      })
      this.app.storage.set(graphNode.uuid, graphNode);
      this.app.fireEvent('graph-note-created', graphNode);
      noteHeader.value = '';
      noteText.value = '';
    });
  }
  generateChipTags() {
    let objNames = {};
    for (let [uuid, nodeIns] of this.app.storage.getMap()) {
      objNames[uuid] = null;
    }
    return objNames;
  }

}
