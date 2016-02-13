module.exports = function (grunt, config) {
    grunt.config.merge({
        jshint: {
            all: [
                'Gruntfile.js',
                config.jsSrcDir + '*.js'
          ]
        },
        concat: {
            options: {
                separator: ';\n',
            },
            basic: {
                src: ['src/js/main.js', 'src/js/plugins/*.js'],
                dest: 'foo/js/main.js',
            },
            extras: {
                src: ['src/js/libs/jquery.js', 'src/js/libs/bootstrap.js', 'src/js/libs/jquery-ui.js', 'src/js/libs/knockout.js'],
                dest: 'foo/js/libs.js',
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'foo/js',
                    src: '*.js',
                    dest: config.jsDir,
                    ext: '.min.js',
                    extDot: 'first'
                }]
            }
        },
        watch: {
            js: {
                files: ['src/js/**/*.js', 'grunt_tasks/*.js', 'gruntfile.js'],
                tasks: [
                    //'jshint',
                    'concat',
                    'uglify'
                ]
            }
        }
    });
};