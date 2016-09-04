console.log("app is connected");

var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {
$routeProvider
    .when('/home', {
        templateUrl: 'assets/views/landingPage.html',
    })

.when('/search', {
    templateUrl: 'assets/views/search.html',
    controller: 'searchCtrl'
})

.when('/around_me', {
    tempalteUrl: 'assets/views/aroundMe.html'
})

.otherwise({
    redirectTo: '/home'
  });
});
