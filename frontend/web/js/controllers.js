var chControllers = angular.module('chControllers', []);

chControllers.controller('staticLandingpageController', function($scope) {
});

chControllers.controller('usersNewController', function($scope, User) {
  User.query(function(data) {
    console.log(data);
    // $scope.posts = data;
  });
});

chControllers.controller('sessionsNewController', function($scope) {
});

chControllers.controller('gamesIndexController', function($scope) {
});

chControllers.controller('gamesShowController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }]
);

chControllers.controller('gamesLobbyController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }]
);
