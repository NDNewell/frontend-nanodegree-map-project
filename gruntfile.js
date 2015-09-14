// Load Grunt Tasks

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Configure tasks

    grunt.initConfig({
        sass: {
                  dist: {
                          src: 'src/sass/style.scss',
                          dest: 'dist/css/style.css'
                  }
        },
        concat: {
                  dist: {
                          src: 'src/js/*.js',
                          dest: 'dist/js/scripts.js'
                  }
        }
    });

    // Register tasks

    grunt.registerTask('default', [
        'sass',
        'concat'
    ]);
};

