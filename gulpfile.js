const {
  src,
  dest,
  series,
  parallel,
  watch
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require("gulp-imagemin");
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const clean = require('gulp-clean');
const kit = require('gulp-kit');
var browserify = require('gulp-browserify');
const babelify = require('babelify');


const paths = {
  html: './html/**/*.kit',
  sass: './src/sass/**/*.scss',
  js: './src/js/**/*.js',
  jsMainFile: './src/js/main.js',
  img: './src/img/**/*',
  dist: './dist',
  sassDest: './dist/css',
  jsDest: './dist/js',
  imgDest: './dist/img'
}

// function javaScriptTest(done) {
//     src('./src/js/main.js')
//     .pipe(browserify( {debug: true}))
//     .pipe(dest('./dist/js'))
// };


function sassCompiler(done) {
  src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.sassDest));
  done();
}

function javaScript(done) {
  src(paths.js)
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(dest(paths.jsDest))
  done();
}

function convertImages(done) {
  src(paths.img)
    .pipe(imagemin())
    .pipe(dest(paths.imgDest));
  done();
}

function kitHandler(done) {
  src(paths.html)
    .pipe(kit())
    .pipe(dest('./'));
  done();
}

function cleanSources(done) {
  src(paths.dist, {
      read: false
    })
    .pipe(clean());
  done();
}

function startBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  done();
}

function watchForChanges(done) {
  watch('./*.html').on("change", reload);
  watch([paths.html, paths.sass, paths.js], parallel(kitHandler, sassCompiler, javaScript)).on("change", reload);
  watch(paths.img, convertImages).on("change", reload);
  done();
}

const mainFunctions = parallel(kitHandler, sassCompiler,javaScript, convertImages)

exports.cleanSources = cleanSources;
exports.default = series(mainFunctions, startBrowserSync, watchForChanges);