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
            uglify: {
                      dist: {
                              files: [{
                                      expand: true,
                                      cwd: config.jsCcDir,
                                      src: ['*.js'],
                                      dest: config.jsMinDir,
                                      ext: '.min.js',
                                      extDot: 'first'
                              }]
                      }
            },
            watch: {
                      js: {
                              files: config.jsSrcDir + '*.js',
                              tasks: [
                                      'jshint',
                                      'concat',
                                      'uglify'
                              ]
                      }
            }
      });
};