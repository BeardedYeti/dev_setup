var gulp = require('gulp');
var Server = require('karma').Server;
var jshint = require('gulp-jshint');


gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('jshint', function(){
  return gulp.src(['src/**/*.js', 'tests/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', ['karma', 'jshint']);

// ***************************************

gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['test']);
  gulp.watch('tests/**/*.js', ['test']);
});

// *******************************************

gulp.task('default', ['test', 'watch',]);