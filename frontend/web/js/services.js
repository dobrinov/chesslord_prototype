var chAPI = angular.module('chAPI', ['ngResource']);

chAPI.factory('User', ['$resource', function($resource){
    return $resource('/api/users/:id');
  }]
);
