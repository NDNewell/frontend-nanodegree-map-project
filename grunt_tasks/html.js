module.exports = function (grunt, config) {
    grunt.config.merge({
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html' : 'src/index.html',
                }
            }
        },
        watch: {
            htmlmin: {
                files: 'src/index.html',
                tasks: 'htmlmin'
            }
        }
    });
};