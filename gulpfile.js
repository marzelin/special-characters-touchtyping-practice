var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var config = require('./gulp.config')();

console.log(config.index);
console.log(config.appJS);

gulp.task('inject', function () {
  return gulp
    .src(config.index)
    .pipe($.inject(gulp.src(config.appJS), {relative: true}))
    .pipe(gulp.dest(config.src));
});
