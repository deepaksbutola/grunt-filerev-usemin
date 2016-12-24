module.exports = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    var pkg = grunt.file.readJSON('package.json');
    grunt.initConfig({
    	pkg: pkg,
        // Clean
        clean: {
			// clean:release removes generated files
			release: [
				'dist'
			]
		},

        // UseminPrepare
        // Prepares for javascript concatenation by parsing the build:js
        // tags in app/index.html, options.dest is dist/app
		useminPrepare: {
			html: 'static/**/*.html',
			options: {
				dest: 'dist/app'
			}
		},

        // Copy HTML, images and fonts
        copy: {
			// copy:release copies all html and image files to dist
			// preserving the structure
			release: {
				files: [
					{
						expand: true,
						cwd: 'static',
						src: [
							'images/*.{png,gif,jpg,svg}',
							'css/**/*.css',
							'js/**/*.js'
						],
						dest: 'dist/app'
					}
				]
			},
			htmlrelease: {
				files: [
					{
						expand: true,
						cwd: 'static',
						src: [
							'**/*.html'
						],
						dest: 'dist/app'
					}
				]
			}
		},

        // Filerev
        filerev: {
			options: {
				encoding: 'utf8',
				algorithm: 'md5',
				length: 20
			},
			release: {
				// filerev:release hashes(md5) all assets (images, js and css )
				// in dist directory
				files: [{
					expand: true,
					cwd: 'dist',
					src: [
						'app/css/**/*.css',
						'app/js/**/*.js',
						'app/images/*.{png,gif,jpg,svg}'
					]
				}]
			},
			dist: {
	            src: [
	              'dist/app/css/{,*/}*.css',
	              'dist/app/js/{,*/}*.js',
				  'dist/app/images/*.{png,gif,jpg,svg}'
	            ]
	          }
		},

        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to their relative paths
        usemin: {
			html: ['dist/app/**/*.html'],
			css: ['dist/app/css/*.css'],
			js: ['dist/app/js/*.js'],
			img: ['dist/app/images/*.{png,gif,jpg,svg}'],
			options: {
				assetsDirs: ['dist/app', 'dist/app/css','dist/app/js','dist/app/images']
			}
		}

    });
    
    // Invoked with grunt release, creates a release structure
    grunt.registerTask('release', 'Creates a release in /dist', [
        'clean',
        'useminPrepare',
        'copy',
        'filerev',
        'usemin'
    ]);
};