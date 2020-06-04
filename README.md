## Principles of constructions:

 - Modularity. Can the construction be replaced with other construction (DOM with Canvas)
  in current logic? If no - abstract.  Reactivity. Rely on app events in all times.
 - Events do not have hierarchy and do not attached to any particular behavior. This also
  allows to use WebService or Assembly.  Use OOP for constructions, FP for behavior.
 - Either don't track state or track all state.

## Initialization:

 [x] constructor (can't be inherited easily)
 [ ] init (have to call new and init after that). But we can call init in constructor
 [ ] create (calls constructor and init and returns new obj)

## Dependency inj

Global dependencies can be written with self invoke func to expcilitly state them. But
this will crash in other evironment, WebWorker on node. Find a way to pass dependencies
gracefully.

We can store dependecies in App similar to storage and renderer and pass it
with app: app.document, app.JSON. This way we don't need self invoked function.
Or somethink like app.nativeAPI.

## State

Every component responsible for won state. 2 options:
 - state can be passed with each listener and saved in listentener management db
 - state can be used as global app dep (app.state = new State()) and store each state
 - (tapable)?

## TODO:

  - TypeScript types

  - How DOM should be rendered. 2 options:
   - Class that responsible for all DOM manipulations Each component should be responsible
   - for own manipulation

  - dep should use this.app.on and so on

  - How DOM should be rendered. 2 options:
     - Class that responsible for all DOM manipulations Each component should be
     - responsible for own manipulation

 - there should be possible to track current branch

 - presentation should be easy tracebale, so we should be able to see the deps or priority
  queue as in trello

 - create bem like classes in html prefixes to eliminate collisions

 - link zoom in animation https://www.youtube.com/watch?v=BJ27r6YGpAs

 - https://www.youtube.com/watch?v=vxOffM_tVHI

 - https://eugeneyan.com/2020/04/05/note-taking-zettelkasten/

 - Move fonts to app, change
