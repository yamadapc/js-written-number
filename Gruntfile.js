'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: [
                'dist'
            ]
        },
        browserify: {
            dist: {
                files: {
                    'dist/written-number.js': 'lib/index.js'
                }
            },
            options: {
                browserifyOptions: {'standalone': 'writtenNumber'}
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/written-number.min.js': 'dist/written-number.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('dist', [
        'clean:dist',
        'browserify:dist',
        'uglify:dist'
    ]);
};
