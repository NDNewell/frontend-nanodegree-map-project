module.exports = function (grunt, config) {
      grunt.config.merge({
            concat: {
                      dist: {
                              src: config.jsSrcDir + '*.js',
                              dest: config.jsConcatDir + 'scripts.js'
                      }
            },
            jshint: {
                      all: [
                              'Gruntfile.js',
                              config.jsSrcDir + '*.js'
                    ]
            },
            watch: {
                      js: {
                              files: '<%= concat.dist.src %>',
                              tasks: [
                                      'jshint',
                                      'concat'
                              ]
                      }
            }
      });
};