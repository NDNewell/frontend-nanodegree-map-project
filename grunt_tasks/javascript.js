module.exports = function (grunt, config) {
    grunt.config.merge({
        jshint: {
            all: [
                'Gruntfile.js',
                config.jsSrcDir + '*.js'
          ]
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: config.jsSrcDir,
                    src: ['*.js'],
                    dest: config.jsDir,
                    ext: '.min.js',
                    extDot: 'first'
                }]
            }
        },
        watch: {
            js: {
                files: config.jsSrcDir + '*.js',
                tasks: [
                    //'jshint',
                    'uglify'
                ]
            }
        }
    });
};