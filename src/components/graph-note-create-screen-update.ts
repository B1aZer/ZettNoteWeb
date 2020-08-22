import './graph-note-create-screen.css';
import html from './graph-note-create-screen.html';
import Component from './component';
import UpdateScreenState from './graph-note-create-screen-state-update';
import CreateScreenComponent from './graph-note-create-screen';

export default class UpdateScreenComponent extends CreateScreenComponent {

  cm: any;
  noteHeader: any;
  noteText: any;

  init() {
    super.init();
    this.name = 'graph-note-create-screen-update';
    this.state = UpdateScreenState(this.app);
  }
  mutateState() {
    this.app.on('graph-note-list-element-edit', async (id) => {
      await this.state.runComponentAction('updateState', {id: id});
      await this.state.runComponentAction('loadState');
      this.state.changeComponentStateTo('init');
    });
  }
}
