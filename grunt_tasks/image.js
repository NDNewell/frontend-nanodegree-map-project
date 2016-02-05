module.exports = function (grunt, config) {
    grunt.config.merge({
        respimg: {
            default: {
                files: [{
                    expand: true,
                    cwd: config.imgSrcDir,
                    src: ['**/*.{gif,jpg,png,svg}'],
                    dest: config.imgResDir
                }],
            }
        },
        svgstore: {
            options: {
                includedemo: false,
                includeTitleElement: false,
                formatting : {
                    indent_size : 2
                }
            },
            default : {
                files: {
                    'dist/img/svg_sprites.svg': ['foo/img/*.svg'],
                }
            }
        }
        ,
        watch: {
            svgstore: {
                files: 'src/foo/img/*.svg',
                tasks: 'svgstore'
            }
        }
    });
};