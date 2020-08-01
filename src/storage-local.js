export default ( function(window, Array, JSON) {

//TODO: use promises since it's a side effect system

let BUCKET_NAME = 'nodes';

class StorageLocal {
  constructor(app) {
    this.app = app;
    this.init();
    return this;
  }
  init() {
    let jsonStorage = window.localStorage.getItem(BUCKET_NAME);
    if (jsonStorage) {
      this.map = new Map(JSON.parse(jsonStorage));
    } else {
      this.map = new Map();
    }
  }
  getMap() {
    return this.map;
  }
  get(k) {
    return this.map.get(k);
  }
  delete(k) {
    this.map.delete(k);
    this.save();
  }
  set(k, v) {
    if (!k) return;
    this.map.set(k, v);
    this.save();
  }
  save() {
    let toJsonStorage = JSON.stringify(Array.from(this.map.entries()));
    window.localStorage.setItem(BUCKET_NAME, toJsonStorage);
  }
}

return StorageLocal;

})(window, Array, JSON);
