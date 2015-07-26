# generator-gulpfile-modules
> Generates a modularized Gulpfile for you.


### Motivation

So as I was bumling around trying to make my modular JS code work with Browserify+Gulp last week, I came across [this fantastic article by a fello named](http://viget.com/extend/gulp-browserify-starter-faq) [Dan Tello](https://twitter.com/dantello5). It of course, solved my Browserify issues, but what was more interesting is the way this fellow breaks up his Gulpfile like a boss. His actual `gulpfile.js` is only 11 lines long:

```javascript
var gulp = require('./gulp')([
    'browserify',
    'compass',
    'images',
    'open',
    'watch',
    'serve'
]);

gulp.task('build', ['browserify', 'compass', 'images']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);

```

So at the root of his project, he's got a `./gulp` folder he puts all his tasks, each in their own little JS file. This is a **really fucking cool** concept, and I think it really follows Gulp's whole notion of "one-task-one-thing" which I appreciate.

##### Enough rambling, wtf is this generator?

This generator will produce a small `gulpfile.js` like the one seen above, along with any gulp task modules that you need. So like:

```
  ./
  |- gulpfile.js
  |- gulp/
  |  |- index.js // this loads all the tasks & gets required by the main gulpfile
  |  |- tasks/
  |  |  |- gulpTaskModule1.js
  |  |  |- gulpTaskModule2.js
  |  |  |- gulpTaskModule3.js
  |  |  |- ...etc.
```

I like this method because it allows you to select which modules you want on demand (as they might change project to project). So like if one project uses Sass and another uses Less, it is easy to use this generator to config either.

---

*Built by [Dave Lunny](http://himynameisdave.com) in the beautiful year of 2015.*



