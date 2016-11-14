/*jshint esversion: 6 */

var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var pngmin = require('gulp-pngmin');
var htmlmin = require('gulp-htmlmin');
var base64 = require('gulp-base64-inline');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var haml = require('gulp-haml');
var spritesmith = require('gulp.spritesmith');

/*создание haml*/
gulp.task('haml', function () {
  gulp.src('app/index.haml')
    .pipe(haml())
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'))
    .pipe(livereload());

});

/*объединение сторонних css*/
gulp.task('vendorCSS', () => {
    return gulp.src('app/css/*.vendor.css')
        .pipe(concatCSS('vendor.css'))
        .pipe(uncss({
            html: ['dist/index.html']
        }))
        .pipe(cleanCSS({
            debug: true
        }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename('vendor.min.css'))
        .pipe(gulp.dest('dist/css/'));
});

/*создание css*/
gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

/*операции с css*/
gulp.task('css', () => {
    return gulp.src('app/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 100 versions'],
            cascade: false
        }))
        .pipe(base64('../img'))
        .pipe(cleanCSS({
            debug: true
        }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(livereload());
});

/*операции с js*/
gulp.task('compress', () => {
    return gulp.src('app/scripts/*.js')
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('dist/scripts/'));
});

/*минимизация png*/
gulp.task('png', () => {
    return gulp.src('app/img/forDist/*.png')
        .pipe(pngmin())
        .pipe(gulp.dest('dist/img'));
});

/*создание спрайта*/
gulp.task('sprite', function() {
    var spriteData =
        gulp.src('app/img/sprite/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss',
                cssFormat: 'scss',
                algorithm: 'left-right',
                cssTemplate: 'cssTemplate.scss',
                cssVarMap: function(sprite) {
                    sprite.name = 'sprite_' + sprite.name;
                }
            }));

    spriteData.img.pipe(gulp.dest('dist/img')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('app/scss')); // путь, куда сохраняем стили
});

/*инициализация*/
gulp.task('init', () => {
    gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(rename('normalize.vendor.css'))
        .pipe(gulp.dest('app/css/'));
    gulp.src('app/img/*.ico')
        .pipe(gulp.dest('dist/img'));
});

/*WATCH*/
gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('app/*.haml', ['haml']) /*следить за haml, запускать haml*/
    gulp.watch('app/img/forDist/*.png', ['png']) /*следить за изображениями, запускать png*/
    gulp.watch('app/css/*.min.css', ['vendorCSS']) /*следить за сторонними css, запускать vendorCSS*/
    gulp.watch('app/scss/**/*.scss', ['sass']) /*следить за SASS, запускать sass*/
    gulp.watch('app/css/style.css', ['css']) /*следить за style.css, запускать css*/
    gulp.watch('app/scripts/*.js', ['compress']) /*следить за js, запускать compress*/
});

/*BUILD*/
gulp.task('build', ['init', 'haml', 'png', 'sass', 'css', 'compress', 'vendorCSS'], function() {
    console.log('Building completed!');
})
