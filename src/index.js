window.addEventListener('DOMContentLoaded', startup);

class App {
  constructor() {
  }
  init() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, []);
  }
}

function startup() {
  let app = new App();
  app.init();
}
