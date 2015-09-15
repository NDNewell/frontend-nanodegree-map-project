module.exports = function (grunt, config) {
      grunt.config.merge({
            respimg: {
                      default: {
                              files: [{
                                    expand: true,
                                    cwd: config.imgSrcDir,
                                    src: ['**.{.gif,jpg,png,svg}'],
                                    dest: config.imgResDir
                              }],
                      }
            }
      });
};