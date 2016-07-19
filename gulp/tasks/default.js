var gulp          = require( 'gulp' );
var sequence      = require( 'run-sequence' );

gulp.task( 'default', function( done ) {
    sequence( 'sass', 'uglify', 'watch', done );
} );