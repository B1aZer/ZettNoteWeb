import html from './graph-note-node.html';
import Component from './component';

export default class GraphNoteNode extends Component {
  init() {
    this.name = 'graph-note-node';
    this.dom = this.renderFragment(html.interpolate(this.state.getData()));
  }
  bindEvents() {
    let el = this.el('.graph-note-node-link');
    el.addEvent('click', (e) => {
      e.preventDefault();
    });
  }
}
