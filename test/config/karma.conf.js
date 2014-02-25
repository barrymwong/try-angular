module.exports = function(karma) {
  karma.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../../',

    //load jasmine (this replaces JASMINE and JASMINE_ADAPTER file references)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'test/unit/*.js'
    ],

    //use phantomJS as a browser
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 5000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: true,

    // report which specs are slower than 500ms
    // CLI --report-slower-than 500
    reportSlowerThan: 500,

    //load the needed plugins (according to karma docs, this should not be needed tho)
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ]
  });
};
