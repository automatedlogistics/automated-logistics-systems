var config      = require( '../util/loadConfig' ).watch;
var gulp        = require( 'gulp' );

// Watch files for changes, recompile/rebuild
gulp.task( 'watch', function() {
    gulp.watch( config.javascript.front, ['front-uglify'] );
    gulp.watch( config.javascript.admin, ['admin-uglify'] );
    gulp.watch( config.javascript.customizer.controls, ['customizer-controls-uglify'] );
    gulp.watch( config.javascript.customizer.preview, ['customizer-preview-uglify'] );
    gulp.watch( config.javascript.quickedit, ['quick-edit-uglify'] );
    gulp.watch( config.sass.front, ['front-sass'] );
    gulp.watch( config.sass.admin, ['admin-sass'] );
} );