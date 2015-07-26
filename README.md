# generator-gulpfile-modules
> Generates a modularized Gulpfile for you.

### Fun Facts
Did you know you could break up your `gulpfile.js` into modules? And with [all](http://requirejs.org/docs/why.html) [the](http://eloquentjavascript.net/10_modules.html) [hype over](https://twitter.com/DanWahlin/status/601783420109365248) [modularized code](https://en.wikipedia.org/wiki/Modular_programming), it stands to reason that we apply this to the way we handle Gulp tasks.

### Reasoning

I don't know about you, but sometimes my `gulpfile`'s get hefty. [Real hefty](http://bobs-burgers.wikia.com/wiki/Hefty_Jeff). And so breaking each individual task off into it's own module just makes sense.

I think it also follows Gulp's whole ["one task"](http://slides.com/contra/gulp#/16) simplicity principal.

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

```

### Install

You can install by runnning...

```
npm i -g https://github.com/himynameisdave/generator-gulpfile-modules.git

```

...and run it via:



---

*Built by [Dave Lunny](http://himynameisdave.com) in the beautiful year of 2015.*



