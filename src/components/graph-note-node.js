import html from './graph-note-node.html';
import Component from './component.js';

export default class GraphNoteNode extends Component {
  construct() {
    this.name = 'graph-note-node';
    this.dom = this.renderFragment(html.interpolate(this.state));
  }
}
