import html from './graph-note-list-element.html';
import Component from './component';

export default class GraphNoteNode extends Component {
  init() {
    this.name = 'graph-note-node';
    this.dom = this.renderFragment(html.interpolate(this.props));
  }
  bindEvents() {
    let el = this.el('.graph-note-node-edit-link');
    el.addEvent('click', (e) => {
      e.preventDefault();
      this.app.fireEvent('graph-note-list-element-edit', this.hash);
    });
    let elDel = this.el('.graph-note-node-delete-link');
    elDel.addEvent('click', (e) => {
      e.preventDefault();
      this.app.fireEvent('graph-note-list-element-delete', this.hash);
    });
  }
}
