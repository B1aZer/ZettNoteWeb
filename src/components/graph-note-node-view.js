import html from './graph-note-node-view.html';
import Component from './component.js';

export default class GraphNoteNodeView extends Component {
  construct() {
    this.name = 'graph-note-node-view';
    this.dom = this.renderFragment(html.interpolate(this.state));
  }
}
