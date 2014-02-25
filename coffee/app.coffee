app = angular.module('app', [])

app.controller 'CatsCtrl', ($scope) ->
	$scope.cats = [
		{name: 'Zoe', mood: 'bossy'}
		{name: 'Buster', mood: 'scared'}
		{name: 'Jelly', mood: 'sassy'}
	]

	$scope.dog = {name: 'Taz', mood: 'hungry'}
	
	$scope.alert = (val) ->
		console.log val;

app.controller 'UnderscoreCtrl', ($scope) ->
	result = ''
	array = ['Zoe', 'Buster', 'Jelly']
	each = ->
		result = _.each array, (item) ->
			console.log item
	each()

app.directive 'myDir', ->
	templateUrl: 'templates/tmpl.html'

app.controller 'TimerCtrl', ($scope, $interval) ->
	stop
	isStarted = false
	initialTime = 0
	speed = 500
	msg = ->
		$scope.time = initialTime++
	$scope.timer = ->
		if isStarted
			isStarted = false
			$interval.cancel(stop)
		else
			isStarted = true
			stop = $interval(msg, 500)
			console.log(stop)

app.directive 'colLeft', ->
	restrict: 'E'
	templateUrl: 'templates/col-left.html'
	replace: true

app.directive 'colRight', ->
	restrict: 'E'
	templateUrl: 'templates/col-right.html'
	replace: true;

app.filter 'reverse', ->
	(text)->
		text.split('').reverse().join('')

app.factory 'Data', ->
	message: 'I am data from a service.'

app.controller 'FirstCtrl', ($scope, Data) ->
	$scope.data = Data

app.controller 'SecondCtrl', ($scope, Data) ->
	$scope.data = Data

app.factory 'Cats', ->
	Data = {}
	Data.felines = [
		{name: 'Zoe', mood: 'Bossy', isCat: true}
		{name: 'Buster', mood: 'Scared', isCat: true}
		{name: 'Jelly', mood: 'Sassy', isCat: true}
		{name: 'Taz', mood: 'Hungry', isCat: false}
	]
	Data

app.controller 'CatsCtrl2', ($scope, Cats) ->
	$scope.data = Cats
	$scope.hello = ->
		console.log 'hello!'

app.directive 'meow', ->
	restrict: 'E'
	link: ->
		console.log 'meow!'

app.directive 'hover', ->
	($scope, $element, $attrs) ->
		$element
			.on 'mouseenter', ->
				console.log 'Enter at your own risk!'
				$element.addClass($attrs.hover);
			.on 'mouseleave', ->
				console.log 'Make like a plant and leave!'
				$element.removeClass($attrs.hover);
			.on 'click', (e) ->
				e.preventDefault()
				console.log 'LOL that tickles!'

app.directive 'action', ->
	($scope, $element, $attrs) ->
		$element
			.on 'click', (e) ->
				e.preventDefault()
				$scope.$apply($attrs.action)

# hijack a tags
app.directive 'a', ->
	restrict: 'E'
	link: (scope, element) ->
		element.on 'click', (event) ->
			event.preventDefault()

app.directive 'reservation', ->
	restrict: 'E'
	controller: ($scope) ->
		$scope.appt = {}
		@partysize = (value) ->
			$scope.appt.partysize = value
	link: (scope, element) ->
		element.on 'click', (event) ->
			event.preventDefault()
			console.log scope.appt

app.directive 'partysize', ->
	require: 'reservation'
	link: (scope, element, attrs, reservationCtrl) ->
		reservationCtrl.partysize(attrs)




