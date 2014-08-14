var chesslordControllers = angular.module('chesslordControllers', []);

chesslordControllers.controller('gamesIndexController', function($scope) {
});

chesslordControllers.controller('gamesShowController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }]
);

chesslordControllers.controller('gamesLobbyController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }]
);
