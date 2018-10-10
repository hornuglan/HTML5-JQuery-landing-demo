var gulp = require('gulp');
var scssPlugin = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
  gulp.src('source/Sass/*.scss')
    .pipe(scssPlugin())
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('source/Sass/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'connect']);
