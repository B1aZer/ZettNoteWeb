import {uuid} from './utils/common';

export default class GraphNode {
  constructor(params) {
    this.header = params.header || '';
    this.text = params.text || '';
    this.uuid = uuid(this.header);
  }
}

