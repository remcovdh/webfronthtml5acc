// Where did we get the information
// http://gruntjs.com/getting-started grunt in general
// https://github.com/gruntjs/grunt-contrib-watch for watching and to combine with reload
// https://github.com/gruntjs/grunt-contrib-livereload reload hooks

module.exports = function(grunt) {

	// Project configuration.
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	
	grunt.initConfig({
		connect: {
			server: {
				options: {
					// keepalive:true, grunt:connect:keepalive of zoiets kan nog wel
					livereload: 35729,
					port: 9002
				}
			},
		},
	  watch: {
      livereload: {
        options: {
          livereload: 35729
        },
        files: [
          '{,*/views/}*.html',
					'app/{,*/}*.js'
        ]				
			}
	  }
	});

	grunt.registerTask('default', 'Starting server and checking file changes', function() {
    grunt.log.write('Starting server\n');
		grunt.task.run('connect');
    grunt.log.write('Server started\n');
    grunt.log.write('Watch html and js file changes\n');
    grunt.log.write('-html only root, /views/ and one subdir down\n');
    grunt.log.write('-js files only in app and one subdir down\n');
		grunt.task.run('watch');
	});

  grunt.registerTask('another', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

};