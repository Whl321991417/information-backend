const gulp = require('gulp');
const babel = require('gulp-babel');
var ts = require('gulp-typescript');
const rollup = require('gulp-rollup');
const replace = require('@rollup/plugin-replace');
//清洗环境
function buildconfig() {
    return gulp
        .src('./dist/app.js')
        .pipe(
            rollup({
                input: './dist/app.js',
                output: {
                    format: 'cjs',
                },
                plugins: [
                    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
                ],
            })
        )
        .pipe(gulp.dest('./dist'));
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
let build = gulp.series(buildprod, buildconfig);

gulp.task("default", build);