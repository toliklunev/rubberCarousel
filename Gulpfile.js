var gulp    = require('gulp');
var replace = require('gulp-replace');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var fs      = require('fs');

gulp.task('default', function(){
	return gulp.src('src/jquery.rubber-carousel.js')
		.pipe(replace('//{replace:css}', fs.readFileSync('src/jquery.rubber-carousel.css', 'utf8')))
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(rename({extname: '.min.js'}))
		.pipe(gulp.dest('dist'));
});