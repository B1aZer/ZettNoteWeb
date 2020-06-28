import Observable from './utils/observable.js';
import StorageLocal from './storage-local.js';
import RendererDOM from './renderer-dom.js';
import RootComponent from './components/graph-note-root.js';

// TS2339: window.M fix
declare const window: any;
declare const String: any;
declare const Object: any;

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
  // "noImplicitAny": false, -> true
  version;
  storage;
  renderer;
  M;

  constructor(params: Object) {
    super();
    this.version = '0.0.1';
    this.init();
    this.renderRoot();
    this.fireEvent('graph-note-init', null);
  }
  static create() {
    let privateParams = {};
    return new App(privateParams);
  }
  init() {
    // passing state and global methods to every dependency
    //this.graph = GraphNode.create(this);

    this.M = window.M;

    //this.storage = new IndexedStorage(this);
    this.storage = new StorageLocal(this);

    //this.renderer = new RendererConsole(this);
    this.renderer = new RendererDOM(this);
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
