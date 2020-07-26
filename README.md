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

 - [ ] State save/restore
 - [ ] state methods (see component STATE)
 - [ ] render list elements
 - [ ] Minimal UI, remove unnecessary elements, scr button, make input full screen
 - [ ] History state
 - [ ] Dwarf fortress has filters for each evemt. Can we do it for before/atter events?
 - [ ] Rethink state and state transition. state compl, how do we save and restore data,actions,name?
 - [ ] it should be easy to remove components just from html markup, parse html and call
 new Component
 - [ ] Beutify code, make less, but working
 - [ ] Minimal responsive UI for note creation
 - [ ] Codemirror with markdown syntax
 - [ ] Note saved to shared storage (Dropbox)
 - [ ] Offline support
