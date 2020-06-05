import Observable from './utils/observable.js';

//TODO: create storage class
class GraphEl {
  constructor(params) {
    this.headerId = params.header || null;
    this.note = params.note || null;
  }
  save() {
    let storage;
    let jsonStorage = window.localStorage.getItem('nodes');
    if (jsonStorage) {
      storage = new Map(JSON.parse(jsonStorage));
    } else {
      storage = new Map();
    }
    storage.set(this.headerId, this.note);
    let toJsonStorage = JSON.stringify(Array.from(storage.entries()));
    window.localStorage.setItem('nodes', toJsonStorage);
  }
}
export default class GraphNode {
  constructor(app) {
    this.app = app;
  }
  init() {
    this.bindListeners();
    this.nodes = [];
  }
  bindListeners() {
    this.app.on('graph-note-create', (el) => {
      let nodeEl = new GraphEl(el);
      nodeEl.save();
      this.nodes.push(nodeEl);
      //TODO: create adj list for connections
    });
  }
}
