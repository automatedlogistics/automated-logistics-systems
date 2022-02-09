'use strict';
module.exports = function (grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		// Gulp can't do what I need well enough
		compress: {
			main: {
				options: {
					archive: 'packaged/cpt-lesson.zip'
				},
				files: [
					{expand: true, dot: true, src: ['./cpt-lesson/**/*.*'], dest: './'}
				]
			}
		}

	});
	
};