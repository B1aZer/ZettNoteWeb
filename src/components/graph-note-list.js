import html from './graph-note-list.html';
import Component from './component';
import GraphNoteNode from './graph-note-list-element.js'
import State from '../state';
import CreateScreenState from './graph-note-create-screen-state';

export default class NodeListComponent extends Component {

  init() {
    this.name = 'graph-note-list';
    this.dom = this.renderFragment(html);
  }
  bindListeners() {
    let nodeContainer = this.el('.graph-note-node-list');
    this.renderNodes();
    this.app.on('graph-note-create', () => {
      console.info(nodeContainer);
      this.renderNodes();
    });
  }
  renderNodes() {
    let nodeContainer = this.el('.graph-note-node-list');
    let nodes = this.app.storage.getMap();
    for (const [k,v] of nodes) {
      let nodeEl = new GraphNoteNode(this.app, v);
      this.app.renderer.append(nodeEl.render(), nodeContainer);
    }
  }
}
