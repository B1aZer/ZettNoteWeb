import Component from './components/component';

export default class HistoryBrowser extends Component {
  app:any;
  init() {
    this.state.data = {
      hash: null,
    }
  }
  saveState(state, h) {
    window.history.pushState(h, state.name);
  }
  bindEvents() {
    window.onpopstate = (event) => {
      this.state.data.hash = event.state;
      this.app.fireEvent('graph-note-history-change');
    };
  }
}

