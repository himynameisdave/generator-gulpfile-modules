# generator-gulpfile-modules
> Generates a modularized Gulpfile for you.


### Motivation

So as I was bumling around trying to make my modular JS code work with Browserify+Gulp last week, I came across [this fantastic article by a fello named](http://viget.com/extend/gulp-browserify-starter-faq) [Dan Tello](https://twitter.com/dantello5). It of course, solved my Browserify issues, but what was more interesting is the way this fellow breaks up his Gulpfile like a boss. His actual ``gulpfile.js` is only 11 lines long:

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

So in that `./gulp` folder he puts all his tasks, each in their own little JS file. This is really really really cool, and I think it really follows Gulp's whole notion of "one-task-one-thing".

##### Enough rambling, wtf is this generator?

This generator will produce a small gulpfile like the one seen above, along with any gulp task modules that you need. So like:

```
  ./
  |- gulpfile.js
  |- gulp/
  |  |- gulpTaskModule1.js
  |  |- gulpTaskModule2.js
  |  |- gulpTaskModule3.js
  |  |- ...etc.
```

*Built by Dave Lunny in the beautiful year of 2015.*

