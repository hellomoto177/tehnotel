global.hostname = "localhost";

gulp = require('gulp');
gutil = require('gulp-util');

jade = require('gulp-jade'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename');

gulp.task('default', ['livereload', 'watch'], function(){

})
gulp.task('express', function() {
	var express = require('express');
	var app = express();
	app.use(require('connect-livereload')({port: 35729}));
	app.use(express.static(__dirname + '/app'));
	app.listen('8000', hostname);
});

var tinylr;
gulp.task('livereload', function() {
	tinylr = require('tiny-lr')();
	tinylr.listen(35729);
});

function notifyLiveReload(event) {
	var fileName = require('path').relative(__dirname, event.path);
	tinylr.changed({
		body: {
			files: [fileName]
		}
	});
}

gulp.task('styles', function () {
	gulp.src('sass/*.scss')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({
		browsers: ['last 15 versions'],
		cascade: true
	}))
	.pipe(minifycss())
	.pipe(gulp.dest('app/css'));
});

gulp.task('jade', function() {
    gulp.src(['./template/*.jade', '!./template/_*.jade'])
        .pipe(jade({
            pretty: true
        }))  // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('./app')) // Записываем собранные файлы
    // .pipe(livereload(server)); // даем команду на перезагрузку страницы
}); 

gulp.task('watch', function() {
	gulp.watch('template/*.jade', ['jade']);
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('app/*.css', notifyLiveReload);
	gulp.watch('app/*.html', notifyLiveReload);
});

gulp.task('default', ['jade', 'styles', 'express', 'livereload', 'watch'], function() {

});
