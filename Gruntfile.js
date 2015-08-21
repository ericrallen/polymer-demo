module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'components/header/css/component.css': 'components/header/css/scss/component.scss',
                    'components/form/css/component.css': 'components/form/css/scss/component.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['components/**/css/scss/**/*.scss'],
                tasks: ['sass', 'notify:sass'],
                options: {
                    spawn: false
                }
            }
        },

        notify: {
            sass: {
                options: {
                    title: 'Grunt',  // optional
                    message: 'SASS compiled and minified' //required
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};
