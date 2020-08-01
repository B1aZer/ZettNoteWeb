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

 - [ ] dropbox storage should have the same interface as storage local
 - [ ] move fireEvent to action (create)
 - [ ] async/await actions
 - [ ] make uuid compatible with vim
 - [ ] remove meterialize, keep icon
 - [x] IT seems the obvious solution is to use component from where event is fired. Check
 if all events fired from component's sc. Will not work because events fired from
 different structures
 - [x] I don't see a point in making list elements statefull. If any state should be on
 parent element. But how do we pass click event from list element to other components. Do
 we need to use arguments with fireEvent? Apparently - Yes.
 - [ ] renderNodes (list)
 - [x] how to create state for multiple components of the same type, so that state was
 accessible from outside? Use props
 - [x] rename, graph node - > list element
 - [x] how to deal with async actions, or actions that use app? (create-scr). Use
 async-await
 - [ ] add note weakmap state const
 - [x] private observable (state)
 - [x] save (create-screen), render nodes (list)
 - [x] local storage event (list.ts)
 - [ ] do we need after/before or we can use different event names (create-screen)
 - [x] singleton state for the same import, but new instance for new state. Weakmap not
 working?
 - [.] remove initState, mutState?
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

## Component actions

Component actions are defined for each state. You can think of it as actions as component
behavior. Some behavior makes sense in one state, but not in other. The drawback is that
state object became more verbose. The advantage is that we don't need to make if
conditions before running action. Example:

Send save request, but only if textarea was changed. We could check textarea before
making request. Or we could define dirty state and define request action in this state. In
this case we could be sure request always would be sent after user made at least one change.

Component action should always return component state (old or new). Use async for async
actions and await for result.

## State WeakMap

Every component state is saved in WeakMap. If same state import multipled times, we don't
want to create a new state, but reuse existing.

We have to use const {} outside of create function to be sure {} points to the same
object.
