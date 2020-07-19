### Principles of constructions:

 - Modularity. Can the construction be replaced with other construction (DOM with Canvas)
  in current logic? If no - abstract.  Reactivity. Rely on app events in all times.
 - Events do not have hierarchy and do not attached to any particular behavior. This also
  allows to use WebService or Assembly.  Use OOP for constructions, FP for behavior.
 - Either don't track state or track all state.

 The main postulates:

 - Think of js program as js worker. It as a standalone worker that is seprate from client
     app. Client app is a browser runtime that user intercats with. User can change any
     state in it as how he pleases. We only care about few events from that environment
     that we subscribed to using browser API.
 - Every subscribed event from client app triggers global event. This event may or may not
     change state of js worker, but worker and all it's subworkers should be aware of the
     event and may or may not subscribe to it. Components subscribe to events using
     bindEvents method. This method if free of any side effects.
     Client app -> Js worker (bindEvents).
 - Components subscribe to events in bindListeners method. This method can involve side
     effects. Think of it as function that takes current state and produces either the
     same state of new state.
     Js worker -> Client app (bindListeners)
 - We want to make app state navigatable, meaning it should be possible to go backwards
     and forward in state history. To achieve this we can track all fired events and their
     arguments. To go backwards we fire previous event. This solution won't work with
     state mutating components, as they may mutate state in less desired way, say append
     new item to the list of items. To fix these we can:

      - Do not replay such callbacks during state transition
      - Rely on immutablity

 - Immutability should be the goal of any state transition. If we mutate any state we
     should be confident and does not provide side effects. One way to do it is to use
     immutable techniques. This also relates to any side methods, like DOM, network, db.
     If we mutate DOM, for example we should think of it as immutable structure. We can't
     append to immutable structure but we can delete it and replace with new.

### Share db across devices

At some point we will need to use database. We nod to share data between devices.

[Safe DB Routine](./2020-07-10-1109-Safe-DB-Routine.md)

### Initialization:

 [x] constructor (can't be inherited easily)
 [ ] init (have to call new and init after that). But we can call init in constructor
 [ ] create (calls constructor and init and returns new obj)

### Dependency inj

Global dependencies can be written with self invoke func to expcilitly state them. But
this will crash in other evironment, WebWorker on node. Find a way to pass dependencies
gracefully.

We can store dependecies in App similar to storage and renderer and pass it
with app: app.document, app.JSON. This way we don't need self invoked function.
Or somethink like app.nativeAPI.

### State

[Global State](./2020-07-10-1103-Global-State.md)
[State Methods](./2020-07-10-1105-State-Methods.md)

Every component responsible for won state. 2 options:
 - state can be passed with each listener and saved in listentener management db
 - state can be used as global app dep (app.state = new State()) and store each state
 - (tapable)?
 - This.app.getComponentState weakmap?
 - State can be changed on exit/enter. This way you don’t have to change state in action
 - State can have parents
 - State rules can be defined with from
 - Undo higher order wrapper that Incapsulfates present /prev state

### Events

[Events Methods](./2020-07-10-1107-Events-Methods.md)

### Priority/Scheduler

We may want to add time to note or add priority to note. Do we can track
important [daily] notes in dashboard.

### How relationship would work

 - tags
 - there should be one way directions and 2 way diections
 - how to set up a relation?

### Component From Html
First, this function grabs the name of the component from the XML node passed
in.  Then it searches the component creator map to find the specific creator
function and calls it to instantiate the component. If it can’t find the
creator, it tosses up an error message and returns in disgrace. The creator
functions are trivially simple. They just return the appropriate instantiated
object.

Back to the CreateComponent() function, the newly created component is then
initialized by calling its Init() function. Assuming this succeeds, the newly
initialized component is returned back to the CreateActor() function.

### Animation

  3 state transition:

    - Create item ->
    - minimize to center ->
    - Transition to canvas (seamlessly), show other elements

  When item is marked completed we can transition line that connects 2 items.

### TODO:

  - Web/Service Worker

  - Write webpack plugin to automatically insert html templates into components

  - We can automatically create components from the HTML tags. parse html -> component create.

  - TypeScript types. Render interface.

  - WebComponents

  - Revision history

  - We can inplment evnt interception that would modify event arguments

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

###### Reference

 - [TODO MVC](http://todomvc.com/examples/react/#/)
 - [Zettk](https://zettelkasten.de/posts/overview/)
