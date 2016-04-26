/*
 * grunt-bizweb
 * https://github.com/HuyHL/grunt-bizweb
 *
 * Copyright (c) 2016 Huy Ha
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
            }
        },

        clean: {
            tests: ['tmp'],
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};