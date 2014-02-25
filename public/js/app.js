(function() {
  var app;

  app = angular.module('app', []);

  app.controller('CatsCtrl', function($scope) {
    $scope.cats = [
      {
        name: 'Zoe',
        mood: 'bossy'
      }, {
        name: 'Buster',
        mood: 'scared'
      }, {
        name: 'Jelly',
        mood: 'sassy'
      }
    ];
    $scope.dog = {
      name: 'Taz',
      mood: 'hungry'
    };
    return $scope.alert = function(val) {
      return console.log(val);
    };
  });

  app.controller('UnderscoreCtrl', function($scope) {
    var array, each, result;
    result = '';
    array = ['Zoe', 'Buster', 'Jelly'];
    each = function() {
      return result = _.each(array, function(item) {
        return console.log(item);
      });
    };
    return each();
  });

  app.directive('myDir', function() {
    return {
      templateUrl: 'templates/tmpl.html'
    };
  });

  app.controller('TimerCtrl', function($scope, $interval) {
    stop;
    var initialTime, isStarted, msg, speed;
    isStarted = false;
    initialTime = 0;
    speed = 500;
    msg = function() {
      return $scope.time = initialTime++;
    };
    return $scope.timer = function() {
      var stop;
      if (isStarted) {
        isStarted = false;
        return $interval.cancel(stop);
      } else {
        isStarted = true;
        stop = $interval(msg, 500);
        return console.log(stop);
      }
    };
  });

  app.directive('colLeft', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/col-left.html',
      replace: true
    };
  });

  app.directive('colRight', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/col-right.html',
      replace: true
    };
  });

  app.filter('reverse', function() {
    return function(text) {
      return text.split('').reverse().join('');
    };
  });

  app.factory('Data', function() {
    return {
      message: 'I am data from a service.'
    };
  });

  app.controller('FirstCtrl', function($scope, Data) {
    return $scope.data = Data;
  });

  app.controller('SecondCtrl', function($scope, Data) {
    return $scope.data = Data;
  });

  app.factory('Cats', function() {
    var Data;
    Data = {};
    Data.felines = [
      {
        name: 'Zoe',
        mood: 'Bossy',
        isCat: true
      }, {
        name: 'Buster',
        mood: 'Scared',
        isCat: true
      }, {
        name: 'Jelly',
        mood: 'Sassy',
        isCat: true
      }, {
        name: 'Taz',
        mood: 'Hungry',
        isCat: false
      }
    ];
    return Data;
  });

  app.controller('CatsCtrl2', function($scope, Cats) {
    $scope.data = Cats;
    return $scope.hello = function() {
      return console.log('hello!');
    };
  });

  app.directive('meow', function() {
    return {
      restrict: 'E',
      link: function() {
        return console.log('meow!');
      }
    };
  });

  app.directive('hover', function() {
    return function($scope, $element, $attrs) {
      return $element.on('mouseenter', function() {
        console.log('Enter at your own risk!');
        return $element.addClass($attrs.hover);
      }).on('mouseleave', function() {
        console.log('Make like a plant and leave!');
        return $element.removeClass($attrs.hover);
      }).on('click', function(e) {
        e.preventDefault();
        return console.log('LOL that tickles!');
      });
    };
  });

  app.directive('action', function() {
    return function($scope, $element, $attrs) {
      return $element.on('click', function(e) {
        e.preventDefault();
        return $scope.$apply($attrs.action);
      });
    };
  });

  app.directive('a', function() {
    return {
      restrict: 'E',
      link: function(scope, element) {
        return element.on('click', function(event) {
          return event.preventDefault();
        });
      }
    };
  });

  app.directive('reservation', function() {
    return {
      restrict: 'E',
      controller: function($scope) {
        $scope.appt = {};
        return this.partysize = function(value) {
          return $scope.appt.partysize = value;
        };
      },
      link: function(scope, element) {
        return element.on('click', function(event) {
          event.preventDefault();
          return console.log(scope.appt);
        });
      }
    };
  });

  app.directive('partysize', function() {
    return {
      require: 'reservation',
      link: function(scope, element, attrs, reservationCtrl) {
        return reservationCtrl.partysize(attrs);
      }
    };
  });

}).call(this);
