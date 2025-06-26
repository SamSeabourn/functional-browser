# Functional browser
Because writing `new SomeConstructor()` is *imperative colonialism* and we’re not about that life.

## What is this?
A collection of **factory functions** for **literally every built-in browser constructor**.
No instantiation logic, no clever wrapping — just pure, functional abstraction for your architecture diagrams.

### Example:

```ts
import { createAbortController } from 'functional-browser';

const abortController = createAbortController();
```

Yeah. That’s it. It’s just `new AbortController()` — but with more ceremony and more syllables.

---

## Why tho?
I noticed functional programmers get *real* squirmy when they see `new` anywhere in their perfect functional codebase. You say “constructor,” they say “side-effect.”

So this library exists for:
* devs who want *all the things* as pure functions
* synergy people
* people who think factory methods are somehow cleaner than the thing they wrap

---

## What’s included?
Every browser global constructor wrapped in a multiple function names, so your all your factories cab align with what ever naming paradigm you have chosen this week

```ts
createAbortController()
initAbortController()
spawnAbortController()
buildAbortController()
makeAbortController()
constructAbortController()
```

These all do **exactly the same thing**. You're welcome.

---

## ️ Install

```bash
yarn add functional-browser
# or
npm install functional-browser
```

No post-install scripts. No weird side effects. Just a lovingly handcrafted index of browser constructor wrappers.

---

## Usage

```ts
import { makeImageBitmap, spawnAudioContext, constructWebSocket } from 'functional-browser';

const img = makeImageBitmap(/* ... */);
const ctx = spawnAudioContext();
const socket = constructWebSocket('wss://echo.websocket.org');
```

These are just... `new ImageBitmap(...)`, `new AudioContext()` and `new WebSocket(...)` under the hood.

But *your code looks more functional now*. Your tech lead might cry tears of joy. Or fire you. Who knows?

---

## Is this tree-shakeable?

Yes. Every constructor wrapper is its own export. If your bundler pulls in the whole thing, that’s your fault.

---

## Why does this exist?

> Because someone has to lean in and say:
> *“Functional programming is just object-oriented programming with commitment issues.”*
Also, it’s kinda nice for mocking in tests. But mostly it’s a meme.

---
## 💬 FAQ

**Q: Why so many names for the same factory?**
A: Autocomplete theater. Also, `spawn` sounds cool.

**Q: Will you add `initializeAbortControllerInstanceFactoryObject()`?**
A: Yeah probably.

**Q: Is this tree-shakeable?**
A: Scroll up, bro.

**Q: Is this a joke or real?**
A: Yes.

---

## Shoutout
Thanks to the functional bros for constantly reminding us that anything wrapped in a function is “better” — even when it’s just `new Foo()` inside.

You're the reason this package exists. This one’s for you.
