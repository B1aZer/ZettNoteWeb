import Observable from './utils/observable.js';
import StorageLocal from './storage-local.js';
import RendererDOM from './renderer-dom.js';
import RootComponent from './components/graph-note-root.js';
import HistoryBrowser from './history-browser';
import {interpolate} from './utils/common.ts';

// TS temp declarations
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
String.prototype.interpolate = interpolate;

export default class App extends Observable {
  // fixing TS2339
  version: string;
  // TODO: interface implements Storage
  storage: any;
  // TODO: interface implements Renderer
  renderer: any;
  M;
  history: any;

  constructor(params: Object) {
    super();
    this.version = '0.0.1';
  }
  static create() {
    // for future use
    let privateParams = {};
    let app = new App(privateParams);
    app.init();
    return app;
  }
  init() {
    // passing state and global methods to every dependency
    // this.graph = GraphNode.create(this);

    this.M = window.M;

    // this.storage = new IndexedStorage(this);
    this.storage = new StorageLocal(this);

    // this.renderer = new RendererConsole(this);
    this.renderer = new RendererDOM(this);

    // TODO: history
    //this.history = new HistoryBrowser(this);

    this.renderRoot();

    // startup event
    this.fireEvent('graph-note-init');
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
