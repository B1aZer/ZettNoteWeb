import Observable from './utils/observable.js';

export default class GraphNode {
  constructor(params) {
    this.header = params.header || '';
    this.text = params.text || '';
    this.uuid = this.createUuid();
    this.parents = params.parents || [];
    this.children = params.children || [];
    this.is_checked = params.is_checked || false;
  }
  createUuid() {
    return new Date().getTime() + this.header.substring(0, 100);
  }
}

class Graph {
}
