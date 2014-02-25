# http://www.tuesdaydeveloper.com/2013/06/angularjs-testing-with-karma-and-jasmine/
# http://evanhahn.com/how-do-i-jasmine/
# http://www.slideshare.net/madrobby/extreme-javascript-performance
# http://odetocode.com/blogs/scott/archive/2007/07/05/function-apply-and-function-call-in-javascript.
<!-- http://hangar.runway7.net/javascript/difference-call-apply -->


var n = 1, m = 2;

var f = function(label) {
	var total = this.n + this.m;
	console.log(label +'='+ total);
};

f('hello');
f.call({n:2,m:3},'hacked!');
f.apply({n:3,m:4},['z','y','x']);