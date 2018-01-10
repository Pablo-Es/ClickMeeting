module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style:'nested',
                },
                files: {
                    "assets/css/style.css": "sass/main.scss" // destination file and source file
                }
            }
        },
        watch: {
            css: {
                files: ['sass/**/*.scss'], // which files to watch
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'watch']);
};