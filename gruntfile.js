module.exports = function(grunt) {

    // Load config file

    var config = grunt.file.readYAML('Gruntconfig.yml');

    // Load Grunt Tasks

    require('load-grunt-tasks')(grunt);

    // Configure tasks

    require('./grunt_tasks/css.js')(grunt, config);
    require('./grunt_tasks/javascript.js')(grunt, config);
    require('./grunt_tasks/image.js')(grunt, config);
    require('./grunt_tasks/html.js')(grunt, config);

    // Register tasks

    grunt.registerTask('default', [
        //'uncss',
        //'csslint',
        //'jshint',
        'concat',
        'uglify',
        'processhtml',
        //'htmlmin',
        'svgstore',
        'svgmin',
        'sprity',
        'cssmin',
        'responsive_images',
        'imageoptim',
        'watch'
    ]);
};

