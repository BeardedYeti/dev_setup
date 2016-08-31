'use strict';

module.exports = function(karma) {
  karma.set({

    frameworks: [ 'jasmine', 'browserify' ],

    files: [
      // 'vendor/external.js',
      // 'src/**/*.js',
      'tests/**/*.js'
    ],

    reporters: [ 'dots' ],

    preprocessors: {
      'tests/**/*.js': [ 'browserify' ],
      'src/**/*.js': [ 'browserify' ]
    },

    browsers: [ 'PhantomJS' ],

    //logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ 'brfs', 'browserify-shim' ]
    }
  });
};