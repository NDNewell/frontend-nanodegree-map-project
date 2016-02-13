module.exports = function (grunt, config) {
    grunt.config.merge({
        processhtml: {
            dist: {
                files: {
                    'foo/processed.html': 'src/index.html'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'dist/index.html' : 'foo/processed.html',
                }
            }
        },
        watch: {
            html: {
                files: 'src/index.html',
                tasks: [
                    'processhtml',
                    'htmlmin'
                ]
            }
        }
    });
};