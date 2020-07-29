import html from './graph-note-list.html';
import Component from './component';
import NodeListElementComponent from './graph-note-list-element.js'
import GraphNoteNode from './graph-note-node.js'
import GraphNoteNodeView from './graph-note-node-view.js'
import State from '../state';
import CreateScreenState from './graph-note-create-screen-state';

export default class NodeListComponent extends Component {

  init() {
    this.name = 'graph-note-list';
    this.dom = this.renderFragment(html);
  }
  bindListeners() {
    let nodeContainer = this.el('.graph-note-node-list');
    //this.renderNodes();
    this.app.on('graph-note-create', () => {
      let obj = CreateScreenState(this.app);
      let nodeEl = new GraphNoteNode(this.app, obj);
      this.app.renderer.prepend(nodeEl.render(), nodeContainer);
      // TODO: fire after local storage saved
      this.app.fireEvent('graph-note-created');
    })
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
