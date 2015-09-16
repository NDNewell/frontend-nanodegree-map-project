module.exports = function (grunt, config) {
    grunt.config.merge({
        cssmin: {
            dist: {
                src: config.cssSrcDir + '*.css',
                dest: config.cssDir + 'style.css'
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
                  'src/css/tidy.css': 'src/index.html'
                }
            }
        },
        watch: {
            cssmin: {
                files: config.cssSrcDir + '*.css',
                tasks: [
                    'csslint',
                    'cssmin'
                ]
            }
        }
    })
};