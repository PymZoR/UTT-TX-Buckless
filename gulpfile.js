var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('latex', function() {
    return gulp.src('report.tex')
        .pipe(shell(["xelatex -shell-escape -interaction=nonstopmode <%= file.path %>"]).on('error', function(){}))
});

gulp.task('watch', function() {
    gulp.watch('./**/*.tex', ['latex']);
});

gulp.task('default', ['latex']);