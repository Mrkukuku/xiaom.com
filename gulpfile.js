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
            .pipe(gulp.dest('./src/image'))
    })

    // gulp.task('say', function() {
    //     return new Promise(function(resolve, reject) {
    //         console.log('hello world');
    //         resolve()
    //     })
    // });
    gulp.task('jsmin', () => {
        return gulp.src(['./src/js/*.js', '!src/js/*min.js'])
            .pipe(uglify())
            .pipe(rename(function(path) {
                path.extname = ".min.js";
            }))
            .pipe(gulp.dest('dist/js'));
    })

    gulp.task('htmlmin', () => {
        return gulp.src(['./src/html/*.html', '!src/html/*min.html'])
            .pipe(htmlmin())
            .pipe(rename(function(path) {
                path.extname = ".min.html";
            }))
            .pipe(gulp.dest('dist/html'))
    });

    gulp.task('sprit', function() {
        return gulp.src(['src/image/logo6.png', 'src/image/logo1.png', 'src/image/logo2.png', 'src/image/logo4.png'])
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
            }))
            .pipe(spritesmash())
            .pipe(gulp.dest('dist/img'));
    });