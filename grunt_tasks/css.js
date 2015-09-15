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