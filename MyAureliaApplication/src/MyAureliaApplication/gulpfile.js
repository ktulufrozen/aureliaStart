/// <binding Clean='clean' ProjectOpened='watch-spa-dev-files' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    watch = require('gulp-watch'),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/"
};

paths.sourceHomeSpa = './Views/Home/spa';
paths.sourceHomeSpaHtmlFiles = './Views/Home/spa/**/*.html';
paths.sourceHomeSpaJsFiles = './Views/Home/spa/**/*.js';
paths.sourceHomeSpaTsFiles = './Views/Home/spa/**/*.ts';
paths.sourceHomeSpaMapFiles = './Views/Home/spa/**/*.map';

paths.webrootHomeSpa = paths.webroot + 'spas/home';

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

var copyHomeSpaDevFileToRoot = function (event) {
    var index = event.path.indexOf("\\spa\\");
    var suffix = event.path.substring(index + 4, event.path.lastIndexOf("\\"));
    var destination = paths.webrootHomeSpa + suffix;

    gulp.src(event.path)
        .pipe(gulp.dest(destination));
}

gulp.task('watch-spa-dev-files', function () {
    gulp.watch(paths.sourceHomeSpaHtmlFiles, copyHomeSpaDevFileToRoot);
    gulp.watch(paths.sourceHomeSpaJsFiles, copyHomeSpaDevFileToRoot);
    gulp.watch(paths.sourceHomeSpaTsFiles, function (event) {
        copyHomeSpaDevFileToRoot(event);

        var jsFilePath = event.path.substring(0, event.path.lastIndexOf(".")) + ".js";
        copyHomeSpaDevFileToRoot({ path: jsFilePath });
    });
    gulp.watch(paths.sourceHomeSpaMapFiles, copyHomeSpaDevFileToRoot);
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);