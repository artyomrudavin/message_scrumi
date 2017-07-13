var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task ('sass-style', function () {
  return gulp.src('src/sass/**/style.scss')
  .pipe(sass({errLogToConsole: true}))
  .pipe(gulp.dest('build/css'));
});

gulp.task ('sass-theme', function () {
  return gulp.src('src/sass/**/theme.scss')
  .pipe(sass({errLogToConsole: true}))
  .pipe(gulp.dest('build/css'));
});

gulp.task('connect', function () {
  connect.server({
    root:'build',
    livereload: true});
});

gulp.task('livereload', function () {
  gulp.src('build/**/*')
  .pipe(connect.reload());
});

gulp.task ('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('build/**/*', ['livereload']);
});

gulp.task('default', ['sass-theme', 'sass-style', 'watch', 'connect']);
