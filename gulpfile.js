var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', ()=> {
  console.log("Hooray");
});

gulp.task('html', () => {
  console.log("something for HTML");
});


gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
