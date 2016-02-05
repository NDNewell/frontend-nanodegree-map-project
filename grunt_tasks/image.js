module.exports = function (grunt, config) {
    grunt.config.merge({
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
                    'foo/img/svg_sprites.svg': 'src/img/svg/*.svg'
                }
            }
        },
        svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    }, {
                        removeUselessStrokeAndFill: false
                    }
                ]
            },
            dist: {
                files: {
                    'dist/img/svg_sprites.svg': 'foo/img/*.svg'
                }
            }
        },
        watch: {
            svgs: {
                files: 'src/img/svg/*.svg',
                tasks: [
                    'svgstore',
                    'svgmin'
                ]
            }
        }
    });
};