chesslord.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/static/landingpage.html',
        controller: 'staticLandingpageController'
      }).
      when('/register', {
        templateUrl: 'views/users/new.html',
        controller: 'usersNewController'
      }).
      when('/login', {
        templateUrl: 'views/sessions/new.html',
        controller: 'sessionsNewController'
      }).
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
        redirectTo: '/'
      });
  }
]);
