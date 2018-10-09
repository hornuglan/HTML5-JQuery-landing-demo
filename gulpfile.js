// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');

var lr = require('tiny-lr'),
  refresh = require('gulp-livereload'),
  server = lr();


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
