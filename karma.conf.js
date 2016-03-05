// Karma configuration
// Generated on Sun Feb 28 2016 23:27:54 GMT+0100 (CET)
var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
              'karma-chrome-launcher',
              'karma-phantomjs-launcher',
              'karma-jasmine',
              'karma-webpack',
            ],
    // list of test files / patterns to load in the browser
    files: [
      'test/**/*.spec.jsx',
      'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 
  		'test/**/*.spec.jsx': ['webpack'],
  		'test/**/*.spec.js': ['webpack'],
        'src/**/*.jsx' : ['webpack']
    },
    

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//    browsers: ['Chrome', 'PhantomJS'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    
    webpack: { //kind of a copy of your webpack config
        module: {
          loaders: [
            { test: /\.jsx?$/, exclude: /(bower_components|node_modules)/, loader: 'babel-loader' },
          ]
        }
      },
    webpackServer: {
        noInfo: true //please don't spam the console when running in karma!
      }
  })
}
