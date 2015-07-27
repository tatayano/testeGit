firefoxOsApp.controller('VantagensCtrl', ['$scope', function($scope){

}]);

firefoxOsApp.controller('VantagensCarouselCtrl', ['$rootScope', '$scope', '$routeParams', function($rootScope, $scope, $routeParams){

    $rootScope.hideNav = true;

    $scope.showMenu = function() {
        $rootScope.hideNav = false;
    };

}]);

