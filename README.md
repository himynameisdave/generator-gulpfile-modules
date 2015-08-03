## generator-gulpfile-modules

[![npm version](https://badge.fury.io/js/generator-gulpfile-modules.svg)](http://badge.fury.io/js/generator-gulpfile-modules) [![Stories in Ready](https://badge.waffle.io/himynameisdave/generator-gulpfile-modules.svg?label=ready&title=Ready)](http://waffle.io/himynameisdave/generator-gulpfile-modules) [![Join the chat at https://gitter.im/himynameisdave/generator-gulpfile-modules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/himynameisdave/generator-gulpfile-modules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> Yeoman generator for creating modularized Gulpfiles



### Fun Facts
Did you know you could break up your `gulpfile.js` into modules? And with [all](http://requirejs.org/docs/why.html) [the](http://eloquentjavascript.net/10_modules.html) [hype over](https://twitter.com/DanWahlin/status/601783420109365248) [modularized code](https://en.wikipedia.org/wiki/Modular_programming), it stands to reason that we can also apply this approach to Gulp tasks.

### Reasoning
I don't know about you, but sometimes my `gulpfile`'s get hefty. [Hefty Jeff](http://bobs-burgers.wikia.com/wiki/Hefty_Jeff)-level hefty. And so breaking each individual task off into it's own module just makes sense.

I think it also follows Gulp's whole ["one task"](http://slides.com/contra/gulp#/16)/simplicity principal.

On top of that, there is an [official recipe](https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md) from the (wonderful) people who develop Gulp.

---

#### Enough yammering, wtf is this generator?

This generator will spit out a `gulpfile` along with the associated task files.

So something like this:

```
./your-awesome-ass-project
  |- gulpfile.js
  |- gulp/
  |  | // tasks
  |- package.json

```

### Install

You can install by runnning...

```
npm i -g generator-gulpfile-modules

```

...and run it via:

```
yo gulpfile-modules
```

Check out the current tasks by looking at this folder.

### Configuring Paths

This generator does a cool trick to manage your directories. It writes a `directories` property to your `package.json` that is read by various gulp tasks. This ensures that if you need to say change the name of a path (like maybe you call your production folder `build` instead of `dist`), all you have to do is make the change in your `package.json` and those changes will be reflected in your Gulp tasks.


### Contribute

Check out the [waffle](https://waffle.io/himynameisdave/generator-gulpfile-modules) for this project to see what needs to be worked on next! Or file your own pull request if you've got a fix or great idea!

---

*Built by [Dave Lunny](http://himynameisdave.com) in the beautiful year of 2015.*



