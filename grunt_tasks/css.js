module.exports = function (grunt, config) {
    grunt.config.merge({
        cssmin: {
            dist: {
                src: ['src/css/*.css', 'foo/css/*.css'],
                dest: config.cssDir + 'style.min.css'
            }
        },
        csslint: {
            strict: {
                options: {
                    important: 2
                },
                src: [config.cssSrcDir + '*.css']
            }
        },
        uncss: {
            dist: {
                files: {
                  'foo/css/tidy.css': 'src/index.html'
                }
            }
        },
        watch: {
            cssmin: {
                files: ['src/css/*.css', 'foo/css/*.css'],
                tasks: [
                    //'csslint',
                    'cssmin'
                ]
            }/*,
            uncss: {
                files: 'src/index.html',
                tasks: [
                    'uncss'
                ]
            }*/
        }
    })
};