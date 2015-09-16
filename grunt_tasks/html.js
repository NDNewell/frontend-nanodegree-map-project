module.exports = function (grunt, config) {
    grunt.config.merge({
        processhtml: {
            dist: {
                files: {
                    'foo/bar.html': 'src/index.html'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html' : 'foo/bar.html',
                }
            }
        },
        watch: {
            processhtml: {
                files: 'src/index.html',
                tasks: 'processhtml'
            },
            htmlmin: {
                files: 'foo/bar.html',
                tasks: 'htmlmin'
            }
        }
    });
};