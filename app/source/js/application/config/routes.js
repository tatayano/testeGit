firefoxOsApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  .when('/', {
    controller: 'HomeCtrl',
    templateUrl: './assets/views/home.html',
    title: 'Ínicio'
  })
  .when('/vantagens', {
    controller: 'VantagensCtrl',
    templateUrl: './assets/views/vantagens.html',
    title: 'Vantagens'
  })
  .when('/vantagens/:id', {
    controller: 'VantagensCarouselCtrl',
    templateUrl: './assets/views/carrossel.html',
    title: 'Veja as vantagens do Firefox Os'
  })
  .when('/descubra', {
    controller: 'DescubraCtrl',
    templateUrl: './assets/views/descubra.html',
    title: 'Descubra'
  })
  .when('/compre-agora', {
    controller: 'CompreAgoraCtrl',
    templateUrl: './assets/views/compre-agora.html',
    title: 'Compre agora'
  })
  .otherwise({ redirectTo: '/' });

}]);