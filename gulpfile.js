    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    var htmlmin = require('gulp-htmlmin');
    var cssmin = require('gulp-cssmin');
    var imagemin = require('gulp-imagemin');
    var concat = require('gulp-concat');
    var spritesmash = require('gulp-spritesmash');
    var spritesmith = require('gulp.spritesmith');
    var buffer = require('gulp-buffer');

    gulp.task('imgmin', () => {
        return gulp.src('./src/image/**')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/image'))
    })

    gulp.task('say', function() {
        return new Promise(function(resolve, reject) {
            console.log('hello world');
            resolve()
        })
    });