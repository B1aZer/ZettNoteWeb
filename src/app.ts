import Observable from './utils/observable.js';
//TODO: check
import GraphNode from './graph-node.js';
import StorageLocal from './storage-local.js';
import RendererDOM from './renderer-dom.js';
import ContainerComponent from './components/graph-note-container.js';

window.addEventListener('DOMContentLoaded', startup);

export default class App extends Observable {

  // fixing TS2339
  // "noImplicitAny": false, -> true
  version;
  storage;
  renderer;

  constructor(params: Object) {
    super();
    this.version = '0.0.1';
    this.init();
  }
  static create() {
    let privateParams = {};
    return new App(privateParams);
  }
  init() {
    // passing state and global methods to every dependency
    //this.graph = GraphNode.create(this);

    //this.storage = new IndexedStorage(this);
    this.storage = new StorageLocal(this);

    //this.renderer = new RendererConsole(this);
    this.renderer = new RendererDOM(this);

    // TODO: abstract
    let baseComponent = new ContainerComponent(this);
    let baseCmpNode = this.renderer.queryCmp(baseComponent.name);
    baseCmpNode.appendChild(baseComponent.render());
  }
}

function startup() {
  App.create();
}
