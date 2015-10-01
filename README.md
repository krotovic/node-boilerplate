# node-boilerplate
Node.js app boilerplate using Sass, Jade and CoffeeScript with Gulp.

It is compiled to `out/` directory.

## Tasks
We have just a few tasks.

### `sass`
It will compile main sass file from `src/assets/sass/style.sass` into `out/assets/css/style.css`.

### `jade`
As task name says, it will compile all jade files inside `src/views/` directory into `out/views/`.

### `coffee`
And finally we provide support for CoffeeScript in `src/` directory.

Those tasks are grouped together in `default` task.  
And we also have `watch` task, so it will compile any of the sources mentioned before on the fly.