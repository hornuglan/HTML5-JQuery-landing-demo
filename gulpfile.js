var gulp = require('gulp');
var scssPlugin = require('gulp-sass');
var connect = require('gulp-connect');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");

gulp.task('style', function () {
  gulp.src('source/Sass/style.scss')
    .pipe(plumber())
    .pipe(scssPlugin())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('source/css'))
});

gulp.task('sass', function () {
  gulp.src('source/Sass/**/*.scss')
    .pipe(scssPlugin())
    .pipe(gulp.dest('source/css'))
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

gulp.task('default', ['style', 'watch', 'connect']);
