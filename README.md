## General

[README for previous version](./README-v.0.1.md)

After trial and error it became clear that Web app is not best suited for Zettelkasten
method or Wiki notes in simple terms. App should has 2 attributes: quick to write, quick
to search. And while web links is good enough solution for latter, there is currently no web editor
available that would be as performant as desktop editor such as vim in regards of writing
and navigation. [See for details](https://github.com/B1aZer/ZettNote). So the scope of this app is switched to creating quick notes
in Zettel system.

Notes stored in special Dropbox folder inside root folder. When app starts you can see all
notes in this folder. And edit them. You can create new note. Notes then will be handled
by Zettlr system.

If there is no internet connection. Notes will be saved to local storage. Which will be
sent to Dropbox as soon as connection reappears.

TY.

## TODO

 - [ ] remove initState, mutState?
 - [x] state definition (component): 'on' should be defined vs child should be able to
 override {}. It seems state should live outside of component. This way component could
 inherit state, update it, subscribe to it. This removes inheritance from state. Is the
 same as reducer? This fixes 'on' issue, child issue, getComponentState issue, and moves
 all method to a separate class
 - [x] component state vs storage state (create-screen.js)
 - [x] access other component state with getComponentState (create-screen.js)
 - [ ] State save/restore (list.js)
 - [x] state methods (component.ts)
 - [x] render list elements (root.js, list.js)
 - [x] Minimal UI, remove unnecessary elements, scr button, make input full screen
 - [ ] History state (grep history)
 - [ ] Dwarf fortress has filters for each evemt. Can we do it for before/atter events?
 - [ ] Rethink state and state transition. state compl, how do we save and restore data,actions,name?
 - [ ] it should be easy to remove components just from html markup, parse html and call
 new Component
 - [ ] Beutify code, make less, but working
 - [ ] Minimal responsive UI for note creation
 - [ ] Codemirror with markdown syntax
 - [ ] Note saved to shared storage (Dropbox)
 - [ ] Offline support
