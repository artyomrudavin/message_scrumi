var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('build/css'));
});


gulp.task('connect', function () {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('livereload', function () {
  gulp.src('build/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('build/**/*', ['livereload']);
});

gulp.task('default', ['sass', 'watch', 'connect']);
