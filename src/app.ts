import Observable from './utils/observable.js';
import StorageLocal from './storage-local.js';
import RendererDOM from './renderer-dom.js';
import RootComponent from './components/graph-note-root.js';

declare global {
  interface Window {
    M: any;
  }
  interface String {
    interpolate (params: Object): Function;
  }
}

window.addEventListener('DOMContentLoaded', startup);

// Minimal string interpolation, possibly unsafe
// Does not really matter due to local bahavior
// TODO: move to utils
String.prototype.interpolate = function(params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
}

export default class App extends Observable {

  // fixing TS2339
  version: string;
  // TODO: implements Storage
  storage: any;
  // TODO: implements Renderer
  renderer: any;
  M;

  constructor(params: Object) {
    super();
    this.version = '0.0.1';
  }
  static create() {
    let privateParams = {};
    let app = new App(privateParams);
    app.init();
    return app;
  }
  init() {
    // passing state and global methods to every dependency
    //this.graph = GraphNode.create(this);

    this.M = window.M;

    //this.storage = new IndexedStorage(this);
    this.storage = new StorageLocal(this);

    //this.renderer = new RendererConsole(this);
    this.renderer = new RendererDOM(this);

    this.renderRoot();
    this.fireEvent('graph-note-init', null);
  }
  renderRoot() {
    let baseComponent = new RootComponent(this);
    let baseCmpNode = this.renderer.queryCmp(baseComponent.name);
    baseCmpNode.appendChild(baseComponent.render());
  }
}

function startup() {
  App.create();
}
