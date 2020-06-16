import html from './graph-note-list-element.html';
import Component from './component.js';
import './graph-note-list-element.css';

export default class NodeListElementComponent extends Component {

  construct() {
    this.name = 'graph-note-list-element';
    this.dom = this.renderFragment(html.interpolate(this.state));
  }
  bindEvents() {
    let listEl = this.el('.graph-note-node-list-element');
    let minBtn = this.el('.minimize-btn');
    let maxBtn = this.el('.expand-btn');
    let delBtn = this.el('.remove-btn');

    minBtn.addEvent('click', (e) => {
      this.minimizeEl(listEl);
    });
    maxBtn.addEvent('click', (e) => {
      this.maximizeEl(listEl);
    });
    delBtn.addEvent('click', (e) => {
      // TODO: delete what
      // how to define deleted element?
      // can we do it without dom access?
      //
      // Probably the simplest way is to add hash (using our js func)
      // and add this to the dom
      this.app.fireEvent('graph-note-delete');
    });
  }
  bindListeners() {
    this.app.on('graph-note-created', (obj) => {
    });
  }
  minimizeEl(el) {
    this.state.min = true;
    this.app.renderer.classAdd('minimize', el);
  }
  maximizeEl(el) {
    this.state.min = false;
    this.app.renderer.classRemove('minimize', el);
  }
}
