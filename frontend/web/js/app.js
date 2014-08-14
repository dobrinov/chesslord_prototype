var chesslord = angular.module('chesslord', ['ngRoute', 'chesslordControllers']);

chesslord.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/games', {
        templateUrl: 'views/games/index.html',
        controller: 'gamesIndexController'
      }).
      when('/game/:id', {
        templateUrl: 'views/games/show.html',
        controller: 'gamesShowController'
      }).
      when('/game/:id/lobby', {
        templateUrl: 'views/games/lobby.html',
        controller: 'gamesLobbyController'
      }).
      otherwise({
        redirectTo: '/games'
      });
  }
]);