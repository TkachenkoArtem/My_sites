/*jshint esversion: 6 */

const gulp = require('gulp');
const concatCSS = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const base64 = require('gulp-base64-inline');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uncss = require('gulp-uncss');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const haml = require('gulp-haml');
const babel = require('gulp-babel');

/*создание haml*/
gulp.task('haml', () => {
  gulp.src('app/index.haml')
    .pipe(haml())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('TkachenkoArtem.github.io'))
    .pipe(livereload());
});

/*объединение сторонних css*/
gulp.task('vendorCSS', () => {
  return gulp.src('app/css/*.vendor.css')
    .pipe(concatCSS('vendor.css'))
    .pipe(uncss({
      html: ['TkachenkoArtem.github.io/index.html']
    }))
    .pipe(cleanCSS({
      debug: true
    }, (details) => {
      console.log(`${details.name} : ${details.stats.originalSize}`);
      console.log(`${details.name} : ${details.stats.minifiedSize}`);
    }))
    .pipe(rename('vendor.min.css'))
    .pipe(gulp.dest('TkachenkoArtem.github.io/css/'));
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
    }, (details) => {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('TkachenkoArtem.github.io/css/'))
    .pipe(livereload());
});

/*транспайлинг*/
gulp.task('babel', () => {
  return gulp.src('app/scripts/script.js')
    .pipe(babel())
    .pipe(rename('script_after_babel.js'))
    .pipe(gulp.dest('app/scripts'));
});

/*операции с js*/
gulp.task('compress', () => {
  return gulp.src('app/scripts/script_after_babel.js')
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('TkachenkoArtem.github.io/scripts/'))
    .pipe(livereload());
});

/*минимизация image*/
gulp.task('imagemin', () => {
  return gulp.src('app/img/for_dist/*')
    .pipe(imagemin())
    .pipe(gulp.dest('TkachenkoArtem.github.io/img'));
});

/*инициализация*/
gulp.task('init', () => {
  gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(rename('normalize.vendor.css'))
    .pipe(gulp.dest('app/css/'));
  gulp.src('app/img/*.ico')
    .pipe(gulp.dest('TkachenkoArtem.github.io/img'));
});

/*WATCH*/
gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('app/*.haml', ['haml']); /*следить за haml, запускать haml*/
  gulp.watch('app/img/for_dist/*', ['imagemin']); /*следить за изображениями, запускать imagemin*/
  gulp.watch('app/css/*.min.css', ['vendorCSS']); /*следить за сторонними css, запускать vendorCSS*/
  gulp.watch('app/scss/**/*.scss', ['sass']); /*следить за SASS, запускать sass*/
  gulp.watch('app/css/style.css', ['css']); /*следить за style.css, запускать css*/
  gulp.watch('app/scripts/script.js', ['babel']); /*следить за js, запускать babel*/
  gulp.watch('app/scripts/script_after_babel.js', ['compress']); /*следить за js, запускать compress*/
});

/*BUILD*/
gulp.task('build', ['init', 'haml', 'png', 'sass', 'css', 'compress', 'vendorCSS'], () => {
  console.log('Building completed!');
});
