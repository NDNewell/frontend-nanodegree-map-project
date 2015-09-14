

module.exports = function(grunt) {

    // Load config file

    var config = grunt.file.readYAML('Gruntconfig.yml');

    // Load Grunt Tasks

    require('load-grunt-tasks')(grunt);

    // Configure tasks

    require('./grunt_tasks/sass.js')(grunt, config);
    require('./grunt_tasks/javascript.js')(grunt, config);

    // Register tasks

    grunt.registerTask('default', [
        'sass',
        'concat',
        'jshint',
        'csslint',
        'watch'
    ]);
};

