"use strict";
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserSync  = require('browser-sync').create();

gulp.task('myStyles', function () {
  gulp.src('./source/Sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./source/css'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watchMyStyles', function() {
  gulp.watch('./source/Sass/**/*.scss', ['myStyles']);
});

gulp.task('default', ['watchMyStyles', 'connect']);

var lr = require('tiny-lr'),
  refresh = require('gulp-livereload'),
  server = lr();

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./HTML5-JQuery-landing-demo/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["./HTML5-JQuery-landing-demo/assets/"]);
}

// Task SASS
gulp.task('sass', function() {
  gulp.src([
    './source/Sass/**/*.scss',
    '!sass/**/_*.scss'
  ])
    .pipe(sass({
      includePaths: ['./source/Sass/style.scss']
    }))
    .pipe(gulp.dest('./source/css'))
    .pipe(refresh(server));
});


gulp.task('refresh', function() {
  gulp.src([
    './*.html'
  ])
    .pipe(refresh(server));
});


// Task: default
gulp.task('default', function() {
  gulp.run('sass');

  server.listen(35729, function (error) {
    if (error) return console.log(error);

    gulp.watch([
      './source/Sass/**',
      './source/img/**'
    ], function(event) {
      gulp.run('sass');
    });

    gulp.watch([
      './*.html'
    ], function(event) {
      gulp.run('refresh');
    });
  });
});
