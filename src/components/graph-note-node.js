import html from './graph-note-node.html';
import Component from './component.js';

export default class GraphNoteNode extends Component {
  construct() {
    this.name = 'graph-note-node';
    this.dom = this.renderFragment(html.interpolate(this.state));
  }
  bindEvents() {
    let el = this.el('.graph-note-node-link');
    el.addEvent('click', (e) => {
      e.preventDefault();
      this.app.fireEvent('graph-note-navigated', this.state);
    });
  }
  bindListeners() {
    let el = this.el('.graph-note-node');
    if (this.state.parents.length) {
      el.classList.add('scale-out');
    }
  }
}
