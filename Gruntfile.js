module.exports = function( grunt )
{
  // Project configuration.
  grunt.initConfig(
  {
    pkg : grunt.file.readJSON( 'package.json' )
    , compass :
    {
      dist :
      {
          options :
          {
            config : 'config/config.rb'
          }
      }
    }
    , uglify :
    {
      options :
      {
        mangle : false
      }
      , my_target :
      {
        files :
        {
          'js/min/base.min.js' :
          [
            'js/lib/jquery-1.11.1.js'
            , 'js/_*.js'
          ]
        }
      }
    }
    , watch :
    {
      sass :
      {
        files : [ 'scss/*.scss' ]
        , tasks : [ 'compass' ]
      }
      , uglify :
      {
        files : [ 'js/*.js' ]
        , tasks : [ 'uglify' ]
      }
      , livereload :
      {
        options :
        {
          livereload : true
        }
        , files :
          [ 'style.css', 'css/*' ]
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-uglify' ); // https://github.com/gruntjs/grunt-contrib-uglify
  grunt.loadNpmTasks( 'grunt-contrib-compass' ); // https://github.com/gruntjs/grunt-contrib-compass
  grunt.loadNpmTasks( 'grunt-contrib-watch' ); // https://github.com/gruntjs/grunt-contrib-watch
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' ); // https://github.com/gruntjs/grunt-contrib-imagemin
  grunt.loadNpmTasks( 'grunt-notify' ); // https://github.com/dylang/grunt-notify

  // Default task(s).
  grunt.registerTask( 'default', [ 'watch' ] );

};
