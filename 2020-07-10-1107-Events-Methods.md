---
id: 20200710110725
title: Events Methods
---

Create note component

After note entered and button pressed

Fire event pressed

This.app.before(pressed) -> change component state to loading

This.app.after(pressed) -> chane component state to init

Before handlers should completed before any on handlers. Can be done with generators (passing next to hanker) or by returning promisefrom handler. Promise.of(return value)
