module.exports = grunt => {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/index.css' : 'scss/index.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			js: {
				files: '**/*.js',
				tasks: ['uglify']
			}
		},
		uglify: {
			options: {
				mangle: false
			  },
			my_target: {
			  files: {
				'dist/index.js': ['js/index.js']
			  }
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass', 'uglify', 'watch']);
}
