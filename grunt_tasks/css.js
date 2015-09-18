module.exports = function (grunt, config) {
    grunt.config.merge({
        cssmin: {
            dist: {
                src: config.cssSrcDir + '*.css',
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
                files: config.cssSrcDir + '*.css',
                tasks: [
                    //'csslint',
                    'cssmin'
                ]
            },
            uncss: {
                files: 'src/css/*.css',
                tasks: [
                    'uncss'
                ]
            }
        }
    })
};