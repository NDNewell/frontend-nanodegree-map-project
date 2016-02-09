module.exports = function (grunt, config) {
    grunt.config.merge({
        svg2png: {
            all: {
                // specify files in array format with multiple src-dest mapping
                files: [
                    // rasterize all SVG files in "img" and its subdirectories to "img/png"
                    { cwd: 'src/img/svg2png', src: ['*.svg'], dest: 'src/img/png/' }
                ]
            }
        },
        sprity: {
          options: {
            'cssPath': '../img/png/',
            'processor': 'css',
            'orientation': 'vertical',
            'margin': 4,
            'format': 'png'
          },
          sprite: {
            options: {
              'style': '../../../foo/css/sprite.css'
            },
            src: 'src/img/png/*',
            dest: 'dist/img/png/png_sprites',
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
                    dest: 'dist/img/jpg/'
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
                files: ['src/img/jpg/*.jpg', 'src/img/png/*.png'],
                tasks: [
                    'responsive_images',
                    'imageoptim'
                ]
            }
        }
    });
};