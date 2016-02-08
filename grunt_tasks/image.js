module.exports = function (grunt, config) {
    grunt.config.merge({
        sprity: {
          options: {
            'cssPath': 'img/',
            'processor': 'css',
            'orientation': 'vertical',
            'margin': 4,
            'format': 'jpg'
          },
          sprite: {
            options: {
              'style': 'css/sprite.css'
            },
            src: ['foo/img/jpg/*', 'src/img/png/*'],
            dest: 'dist/img/jpg/raster_sprites',
          }
        },
        responsive_images: {
            myTask: {
                options: {
                    sizes: [{
                        //width: 320,
                    //},{
                        name: "w640",
                        width: 640,
                    //},{
                        //width: 1024,
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'src/img/jpg/',
                    src: ['*.jpg'],
                    dest: 'foo/img/jpg/'
                }]
            }
        },
        imageoptim: {
            options: {
                quitAfter: true
            },
            allPngs: {
                options: {
                    imageAlpha: true,
                    jpegMini: false
                },
                src: ['dist/img/png/']
            },
            allJpgs: {
                options: {
                    imageAlpha: false,
                    jpegMini: true
                },
                src: ['dist/img/jpg/']
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
                    'foo/img/svg/svg_sprites.svg': 'src/img/svg/*.svg'
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
                    'dist/img/svg/svg_sprites.svg': 'foo/img/svg/*.svg'
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
            },
            raster: {
                files: 'src/img/jpg/*.jpg',
                tasks: [
                    'responsive_images',
                    'sprity',
                    'imageoptim',
                ]
            }
        }
    });
};