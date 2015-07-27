firefoxOsApp.run(['$rootScope','$location', function ($rootScope, $location) {

  $rootScope.$on("$routeChangeStart", function(event, currRoute, prevRoute) {

    $rootScope.title = currRoute.$$route.title;

  });

  $rootScope.activeMenu = function(path) {
    return $location.path() === path;
  };

}]);