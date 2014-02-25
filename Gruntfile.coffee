module.exports = (grunt) ->
	grunt.initConfig
		sass:
			dist:
				files:
					'public/css/style.css': 'sass/style.scss'
		
		coffee:
			compile:
				files:
					'public/js/app.js': 'coffee/app.coffee'
		
		karma:
			unit:
				configFile: 'test/config/karma.conf.js'
				keepalive: true
			e2e:
				configFile: 'test/config/protractor.conf.js'
				keepalive: true
			watch:
				configFile: 'test/config/unit.js'
				singleRun: false
				autoWatch: true
				keepalive: true

		watch:
			options:
				livereload: true
			js:
				files: 'coffee/app.coffee'
				tasks: 'coffee'
			css:
				files: 'sass/style.scss'
				tasks: 'sass'
			html:
				files: ['public/index.html', 'public/templates/*']
			karma:
				files: 'test/unit/**/*'
				tasks: 'karma:unit'

	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-karma'

	grunt.registerTask 'dev', ['sass', 'coffee', 'karma:unit', 'watch']
	grunt.registerTask 'test-unit', ['karma:unit']
	grunt.registerTask 'test-e2e', ['karma:e2e']