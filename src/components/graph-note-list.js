import html from './graph-note-list.html';
import Component from './component.js';
import NodeListElementComponent from './graph-note-list-element.js'

export default class NodeListComponent extends Component {

  construct() {
    this.name = 'graph-note-list';
    this.dom = this.renderFragment(html);
  }
  bindListeners() {
    let nodeContainer = this.el('.graph-note-node-list');
    this.renderNodes();
    this.app.on('graph-note-created', (obj) => {
      let nodeEl = new NodeListElementComponent(this.app, obj);
      this.app.renderer.prepend(nodeEl.render(), nodeContainer);
    })
  }
  renderNodes() {
    let nodeContainer = this.el('.graph-note-node-list');
    let nodes = this.app.storage.getMap();
    for (const [k,v] of nodes) {
      let nodeEl = new NodeListElementComponent(this.app, {header: k, text: v});
      this.app.renderer.append(nodeEl.render(), nodeContainer);
    }
  }
}
