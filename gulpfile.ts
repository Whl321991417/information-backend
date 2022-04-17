const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const rollup = require('gulp-rollup');
const replace = require('gulp-replace');

const uglify = require('gulp-uglify');

var through = require('through2');
var pp = require('preprocess');
function preprocess() {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        const content = pp.preprocess(file.contents.toString(), {});
        const contentObj = JSON.parse(content)
        contentObj.devDependencies = {}
        file.contents = Buffer.from(JSON.stringify(contentObj));
        this.push(file);
        cb();
    });
}
//清洗环境
function buildconfig() {
    return gulp
        .src('./dist/**/*.js')
        .pipe(replace('.ts','.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
}
//copy
function copyPackageJson() {
    return gulp
        .src('./package.json')
        .pipe(
            preprocess()
        )
        .pipe(gulp.dest('./dist'))
}
function buildprod() {
    return gulp.src('./src/**/*.ts')
        .pipe(
            babel({
                babelrc: false,
                plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-typescript', ["@babel/plugin-proposal-decorators", { "legacy": true }],],
            })
        )
        .pipe(gulp.dest("dist"));
}
let build = gulp.series(buildprod, buildconfig, copyPackageJson);

gulp.task("default", build);