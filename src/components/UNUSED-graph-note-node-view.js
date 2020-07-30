import html from './graph-note-node-view.html';
import Component from './component';

export default class GraphNoteNodeView extends Component {
  init() {
    this.name = 'graph-note-node-view';
    this.dom = this.renderFragment(html.interpolate(this.state));
  }
}
