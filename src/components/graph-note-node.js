import html from './graph-note-node.html';
import Component from './component';

export default class GraphNoteNode extends Component {
  init() {
    this.name = 'graph-note-node';
    this.dom = this.renderFragment(html.interpolate(this.state));
  }
  bindEvents() {
    let el = this.el('.graph-note-node-link');
    el.addEvent('click', (e) => {
      e.preventDefault();
      //TODO: fireEvent should not have arguments
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
