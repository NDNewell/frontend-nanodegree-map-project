module.exports = function (grunt, config) {
      grunt.config.merge({
            sass: {
                      dist: {
                              src: config.scssDir + 'style.scss',
                              dest: config.cssDir + 'style.css'
                      }
            },
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
                              src: "<%= sass.dist.dest %>"
                      }
            },
            watch: {
                      sass: {
                              files: config.scssDir + '**/*.scss',
                              tasks: [
                                    'sass',
                                    'csslint'
                              ]
                      }
            }
      })
};