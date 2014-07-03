// Where did we get the information
// http://gruntjs.com/getting-started grunt in general
// https://github.com/gruntjs/grunt-contrib-watch for watching and to combine with reload
// https://github.com/gruntjs/grunt-contrib-livereload reload hooks
 
module.exports = function(grunt) {
 
    // Project configuration.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks('grunt-contrib-jshint');  
     
    grunt.initConfig({
	    	jshint: {
	      	options: {
	        	// jshintrc: '.jshintrc',
            all: ['video.js']
					}
	      },
        connect: {
            server: {
                options: {
                    // keepalive:true, grunt:connect:keepalive of zoiets kan nog wel
                    livereload: 35730,
                    port: 9003
                }
            },
        },
        watch: {
            livereload: {
                options: {
                    livereload: 35730
                },
                files: [
                    '*.html',
                    '*.js',
										'*.css'
                ]
            }
        }
    });
 
    grunt.registerTask('default', 'Starting server and checking file changes', function() {
        grunt.log.write('Starting code quality check\n');
        grunt.task.run('jshint');
        grunt.log.write('Starting server\n');
        grunt.task.run('connect');
        grunt.log.write('Server started\n');
        grunt.log.write('Watch html, js and css file changes\n');
        grunt.log.write('-only in the home / root');
        grunt.task.run('watch');
    });
 
    grunt.registerTask('another', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });
 
};