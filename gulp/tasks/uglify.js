var $             = require( 'gulp-load-plugins' )();
var config        = require( '../util/loadConfig' ).javascript;
var gulp          = require( 'gulp' );
var sequence      = require( 'run-sequence' );
var notify        = require( 'gulp-notify' );
var fs            = require( 'fs' );
var pkg           = JSON.parse( fs.readFileSync( './package.json' ) );
var onError       = notify.onError( {
    title:    pkg.name,
    message:  '<%= error.name %> <%= error.message %>'   
} );

// If we don't uglify our code, we don't have to worry about the ECMAScript 2015 stuff. Due to dependencies on this site, we will just not Uglify
gulp.task( 'front-uglify', function() {
    
    return gulp.src( config.front.bowerPaths.concat( config.front.src ) )
        .pipe( $.plumber( { errorHandler: onError } ) )
        .pipe( $.sourcemaps.init() )
        .pipe( $.babel( {
            //presets: ['es2015'] // Gulp-uglify has no official support for ECMAScript 2015 (aka ES6, aka Harmony), so we'll transpile to EcmaScript5
        } ) )
        .pipe( $.concat( config.front.filename ) )
        //.pipe( $.uglify() )
        .pipe( $.sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.dest.root ) )
        .pipe( $.plumber.stop() )
        .pipe( notify( {
            title: pkg.name,
            message: 'JS Complete'
        } ) );

} );

gulp.task( 'admin-uglify', function() {

    return gulp.src( config.admin.src )
        .pipe( $.plumber( { errorHandler: onError } ) )
        .pipe( $.sourcemaps.init() )
        .pipe( $.babel() )
        .pipe( $.concat( config.admin.filename ) )
        .pipe( $.uglify() )
        .pipe( $.sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.dest.root ) )
        .pipe( $.plumber.stop() )
        .pipe( notify( {
            title: pkg.name,
            message: 'Admin JS Complete'
        } ) );

} );

gulp.task( 'customizer-controls-uglify', function() {

    return gulp.src( config.customizer.controls.src )
        .pipe( $.plumber( { errorHandler: onError } ) )
        .pipe( $.sourcemaps.init() )
        .pipe( $.babel() )
        .pipe( $.concat( config.customizer.controls.filename ) )
        .pipe( $.uglify() )
        .pipe( $.sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.dest.root ) )
        .pipe( $.plumber.stop() )
        .pipe( notify( {
            title: pkg.name,
            message: 'Customizer Controls JS Complete'
        } ) );

} );

gulp.task( 'customizer-preview-uglify', function() {

    return gulp.src( config.customizer.preview.src )
        .pipe( $.plumber( { errorHandler: onError } ) )
        .pipe( $.sourcemaps.init() )
        .pipe( $.babel() )
        .pipe( $.concat( config.customizer.preview.filename ) )
        .pipe( $.uglify() )
        .pipe( $.sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.dest.root ) )
        .pipe( $.plumber.stop() )
        .pipe( notify( {
            title: pkg.name,
            message: 'Customizer Preview JS Complete'
        } ) );

} );

gulp.task( 'quick-edit-uglify', function() {

    return gulp.src( config.quickedit.src )
        .pipe( $.plumber( { errorHandler: onError } ) )
        .pipe( $.sourcemaps.init() )
        .pipe( $.babel() )
        .pipe( $.concat( config.quickedit.filename ) )
        .pipe( $.uglify() )
        .pipe( $.sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.dest.root ) )
        .pipe( $.plumber.stop() )
        .pipe( notify( {
            title: pkg.name,
            message: 'Quick-Edit JS Complete'
        } ) );

} );

gulp.task( 'uglify', function( done ) {
    sequence( 'front-uglify', 'admin-uglify', 'customizer-controls-uglify', 'customizer-preview-uglify', 'quick-edit-uglify', done );
} );