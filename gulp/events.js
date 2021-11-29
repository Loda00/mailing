var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
    return runSequence('css', 'html');
});

gulp.task('watch', ['default', 'copy', 'browser-sync'], function () {
    return gulp.watch(['./pug/**/*.pug', './stylus/**/*.styl'], function () {
        runSequence('css', 'html', 'browser-sync:reload');
    });
});
