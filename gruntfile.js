

module.exports = function(grunt) {

    // Load config file

    var config = grunt.file.readYAML('Gruntconfig.yml');

    // Load Grunt Tasks

    require('load-grunt-tasks')(grunt);

    // Configure tasks

    grunt.initConfig({
        sass: {
                  dist: {
                          src: config.scssDir + 'style.scss',
                          dest: config.cssDir + 'style.css'
                  }
        },
        concat: {
                  dist: {
                          src: config.jsSrcDir + '*.js',
                          dest: config.jsConcatDir + 'scripts.js'
                  }
        },
        jshint: {
                  all: [
                          'Gruntfile.js',
                          config.jsSrcDir + '*.js'
                ]
        },
        watch: {
                  sass: {
                          files: config.scssDir + '**/*.scss',
                          tasks: ["sass"]
                  }
        }
    });

    // Register tasks

    grunt.registerTask('default', [
        'sass',
        'concat',
        'jshint',
        'watch'
    ]);
};

