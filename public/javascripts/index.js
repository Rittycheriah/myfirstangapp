(function () {
  'use strict';
  
  angular.module('everypg', []) // EVERY module MUST have the top directive in it
  .controller('MainController', ['$scope', function($scope){
    $scope.name='RAINU';
    $scope.instructors=[
      {name:'steve', allergies:'sunshine'}, 
			{name:'joe', allergies:'everything'}, 
  		{name:'zoe', allergies:'students'}
    ];
  }])
})();

// Starts with an iffe 
// Include module with every page's ng-directive
// include same code with different controller with every page in ONE app
// $scope is almost DOM 