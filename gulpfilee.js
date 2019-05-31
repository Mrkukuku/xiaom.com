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
    gulp.task('say', function() {
        return new Promise(function(resolve, reject) {
            console.log('hello world');
            resolve()
        })
    });

    gulp.task('jsmin', () => {
        return gulp.src(['./src/ceshi/*.js', '!src/ceshi/*min.js'])
            .pipe(uglify())
            .pipe(rename(function(path) {
                path.extname = ".min.js";
            }))
            .pipe(gulp.dest('dist/js'));
    });

    gulp.task('htmlmin', () => {
        return gulp.src(['./src/ceshi/*.html', '!src/ceshi/*min.html'])
            .pipe(htmlmin())
            .pipe(rename('1.min.html'))
            .pipe(gulp.dest('dist/html'))
    });

    gulp.task('cssmin', function() {
        return gulp.src(['./src/ceshi/*.css', '!src/ceshi/*min.css'])
            .pipe(cssmin())
            .pipe(rename('1.min.css'))
            .pipe(gulp.dest('dist/css'));
    })
    gulp.task('concat', () => {
        return gulp.src(['./src/ceshi/1.js', './src/ceshi/1.min.js'])
            .pipe(concat('2.js'))
            .pipe(gulp.dest('dist/js'))

    })

    gulp.task('sprit', function() {
        return gulp.src(['src/image/logo6.png', 'src/image/logo1.png', 'src/image/logo2.png', 'src/image/logo4.png'])
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
            }))
            .pipe(spritesmash())
            .pipe(gulp.dest('dist/img'));
    });

    // 6. 文件监听
    gulp.task('watch', () => {
        gulp.watch(['./src/html/*.html', './src/css/*.css', './src/js/*.js'], gulp.series('htmlmin', 'cssmin', 'js'));
    });