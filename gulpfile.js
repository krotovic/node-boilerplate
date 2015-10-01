var gulp = require('gulp'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    jade = require('gulp-jade'),
    outputDir = "./out/";

gulp.task('sass', function () {
    gulp.src('./src/assets/sass/style.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(outputDir + 'assets/css'));
});

gulp.task('coffee', function () {
    gulp.src('./src/**/*.coffee')
        .pipe(coffee({bare: true}))
        .pipe(gulp.dest(outputDir));
});

gulp.task('jade', function () {
    gulp.src('./src/views/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest(outputDir + "views"));
});

gulp.task('default', ['sass', 'coffee', 'jade']);
gulp.task('watch', function () {
    gulp.watch('./src/assets/sass/**/*', ['sass']);
    gulp.watch('./src/**/*.coffee', ['coffee']);
    gulp.watch('./src/views/**/*.jade', ['jade']);
});