var gulp = require('gulp');
var gzip = require('gulp-gzip');
const imagemin = require('gulp-imagemin');
gulp.src('src/assets/**/*.*')
  .pipe(imagemin())
  .pipe(gulp.dest('.dist/assets'))

gulp.task('compress', function() {
  return gulp.src(['./dist/**/*.*'])
      .pipe(gzip())
      .pipe(gulp.dest('./dist'));
});