import Observable from './utils/observable.js';

class Graph {
}

export default class GraphNode {
  constructor(params) {
    this.header = params.header || '';
    this.text = params.text || '';
    this.uuid = this.createUuid();
    this.parents = params.parents || [];
    // TODO: HOw do we update children?
    this.children = params.children || [];
    this.is_checked = params.is_checked || false;
  }
  createUuid() {
    return new Date().getTime() + this.header.substring(0, 100);
  }
}

