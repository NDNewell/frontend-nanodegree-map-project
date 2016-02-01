module.exports = function (grunt, config) {
    grunt.config.merge({
        respimg: {
            default: {
                files: [{
                    expand: true,
                    cwd: config.imgSrcDir,
                    src: ['*.{gif,jpg,png,svg}'],
                    dest: config.imgResDir
                }],
            }
        },
        svgstore: {
            options: {
                includedemo: true,
                cleanup: ['fill', 'stroke'],
                includeTitleElement: false,
                formatting : {
                    indent_size : 2
                }
            },
            default : {
                files: {
                    'dist/img/icons.svg': ['dist/img/SVGsprite/*.svg'],
                }
            }
        }
        ,
        watch: {
            svgstore: {
                files: 'dist/img/SVGsprite/*.svg',
                tasks: 'svgstore'
            }
        }
    });
};