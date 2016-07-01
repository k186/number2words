/**
 * Created by k186 on 2016/6/24.
 * install gulp command
 *
 * npm install --save-dev gulp gulp-uglify gulp-rename  path gulp-clean gulp-rev
 *
 * npm init
 * 
 * run gulp command
 *
 * gulp
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    rev = require('gulp-rev');

//default task
gulp.task('default',['clean'],function () {
   gulp.run('copyjs');
});
gulp.task('clean',function () {
    return gulp.src('./build/',{read:false})
        .pipe(clean({force:true}))
});
gulp.task('copyjs',['renameJS'],function () {
    return gulp.src('./src/number2words.js')
        .pipe(gulp.dest('./build/'))
});
gulp.task('renameJS',['minifyJS'],function () {
    return gulp.src('./build/number2words.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/'))
});
gulp.task('minifyJS',function () {
   return gulp.src('./src/number2words.js') 
       .pipe(uglify())
       .pipe(gulp.dest('build/'))
});
