# Functional Bro~~wser~~ 
![ts](https://flat.badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555) ![Tree-shakeable](https://flat.badgen.net/badge/tree-shakeable/yes/green) ![ts](https://flat.badgen.net/badge/dependencies/0?labelColor=blue&color=555555)

> Functional wrappers for every global browser constructor. Because `new` is getting old.

### What is this?
A collection of **factory functions** for **literally every built-in browser constructor**.
No instantiation logic, no clever wrapping just pure, functional abstraction for your architecture diagrams.

### Example:
Before: (yuck)
```ts
const abortController = new AbortController();
```

After: (Phew that's better)
```ts
import { createAbortController } from 'functional-browser';
const abortController = createAbortController();
```

Yeah. That’s it. It’s just `new AbortController()` — but with more ceremony and less class.

### Why tho?
I noticed functional programmers get *real* squirmy when they see `new` anywhere in their perfect functional codebase. You say “constructor,” they say “side-effect.”

So this library exists for:
* devs who want *all the things* as pure functions
* functional programming extremists
* People who like double layered syntaxical sugar

### What’s included?
Every browser global constructor wrapped in a multiple function names, so your all your existing factories can align with what ever naming paradigm you have chosen this week.

```ts
createAbortController()
initAbortController()
spawnAbortController()
buildAbortController()
makeAbortController()
constructAbortController()
```
These all do **exactly the same thing**. You're welcome bty.

### Install
```bash
yarn add functional-browser
# or
npm install functional-browser
```
No post-install scripts. No weird side effects. Just a lovingly handcrafted index of browser constructor wrappers.

### Usage
```ts
import { makeImageBitmap, spawnAudioContext, constructWebSocket } from 'functional-browser';

const img = makeImage(900, 900);
const ctx = spawnAudioContext();
const socket = constructWebSocket('wss://echo.websocket.org');
```

These are just... `new Image()`, `new AudioContext()` and `new WebSocket(...)` under the hood but *✨your code looks more functional now*✨. 

### Is this tree-shakeable?
Yes. Every constructor wrapper is its own export. If your bundler pulls in the whole thing, that’s your fault probably.

### FAQ
**Q: Is this tree-shakeable?**
A: Scroll up, bro.

**Q: Is this a joke or real?**
A: Yes.

### Shoutout to the Functional Purists
Thanks to the functional bros for constantly reminding us that anything wrapped in a function is “better”... even when it’s just `new Foo()` inside.
You are the reason this package exists. This one’s for you.
