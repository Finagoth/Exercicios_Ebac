process.noDeprecation = true;
process.removeAllListeners('warning');

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript( ) {
    return gulp.src('./source/scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/scripts'));
}

function watch() {
    gulp.watch('./source/styles/*.scss', compilaSass);
    gulp.watch('./source/images/*', comprimeImagens);
    gulp.watch('./source/scripts/*.js', comprimeJavaScript);
}

exports.default = gulp.parallel(compilaSass, comprimeImagens, comprimeJavaScript);
exports.watch = watch;