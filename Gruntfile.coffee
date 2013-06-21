
module.exports = (grunt) ->

  createjsSampler = require('./grunt/CreateJSSampler')(grunt.util._)


  grunt.initConfig

    watch:
      options:
        livereload: true
      createjs:
        files: ['src/flash/out/**/*.{js,html}']
        tasks: ['createjs']


    copy:
      createjs:
        files: [
          expand: true
          cwd: './src/flash/out/img/'
          src: ['**/*.{png,jpg,jpeg}']
          dest: 'dist/img'
        ]

    concat:
      createjs:
        dest: "dist/js/createjsAssets.js"
        src: [ "src/flash/out/**/*.js"]

    jade:
      options:
        pretty: true
      createjs:
        options:
          data: {data: createjsSampler.create([
            'src/flash/out/createjsUICMAsset'
            'src/flash/out/About'
          ])}
        files: [
          "src/coffee/CreeateJSAssets.coffee": ["grunt/CreateJSAssets.tmpl.jade"]
        ]


    imagemin:
      dist:
        files: [
          expand: true
          src: 'dist/img/**/*.{png,jpg,jpeg}'
        ]
        options:
          optimizationLevel: 3


    clean:
      createjs:
        src: ['dist/img/**/^ビットマップ.*.{png,jpg,jpeg}']
    connect:
      livereload:
        options:
          port: 9002




  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.registerTask 'createjs', ['copy:createjs', 'concat:createjs', 'jade:createjs']
  grunt.registerTask 'start_createjs', ['createjs', 'watch:createjs']


return