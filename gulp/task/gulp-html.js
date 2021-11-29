var gulp = require('gulp');
var pug = require('gulp-pug');
var inlineCss = require('gulp-inline-css');
var through2 = require('through2');
var fs = require('fs');
var lodash = require('lodash');

lodash.templateSettings = {
    evaluate: /\{\{([\s\S]+?)\}\}/g,
    interpolate: /\{\{=([\s\S]+?)\}\}/g
}

var basePath = './';

gulp.task('html', function () {
    return gulp.src(['./pug/4_pages/**/*.pug'])
        .pipe(pug({
            pretty: true,
            basedir: basePath
        }))
        .pipe(inlineCss({
            removeLinkTags: true,
            removeStyleTags: false
        }))
        .pipe(through2.obj(function (chunk, encoding, callback) {
            var content = chunk.contents.toString();
            var cssContent = fs.readFileSync('./dist/css/0_toolbox/media-queries.css').toString();
            var newContent = content.replace(/mediaQueries/gm, cssContent);
            var dataDummyPath = chunk.path.replace(/\/pug\//, "/mock/").replace(/\.html$/, ".js");

            if (fs.existsSync(dataDummyPath)) {
                var lodashCompile = lodash.template(newContent);
                var dataDummy = require(dataDummyPath)
                newContent = lodashCompile(dataDummy)
            }

            chunk.contents = new Buffer(newContent, "utf-8");
            callback(null, chunk);
        }))
        .pipe(gulp.dest('./dist/html'));
});
