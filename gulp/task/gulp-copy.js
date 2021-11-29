var gulp = require('gulp');

gulp.task('copy', function () {
    return gulp.src('./assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});
