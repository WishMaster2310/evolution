module.exports = function(grunt) {

    grunt.initConfig({
        prettify: {
            options: {
                "indent": 4
            },
            html: {
                expand: true,
                cwd: 'export/',
                ext: '.html',
                src: ['*.html'],
                dest: 'export_for_preview/'
            }
        },
        
        copy: {
          
          main: {
            expand: true, 
            src: ['static/css/**/*', 'static/js/**/*', 'static/img/**/*', 'static/lib/**/*'], 
            dest: 'export_for_preview/', 
            filter: 'isFile'
          }
        },

        sprite: {
            main: {
                src: 'static/img/icons/*.png',
                //retinaSrcFilter: 'static/img/icons/*-2x.png',
                dest: 'static/img/sprite.png',
                //retinaDest: 'static/img/sprite-2x.png',
                destCss: 'static/less/components/sprites.less',
                cssTemplate: 'handlebarsStr.css.handlebars',
                padding: 10,
            }        
        }
    });

    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['sprite', 'prettify', 'copy']);
};

