var firefoxOsApp = angular.module('firefoxOsApp', ['ngRoute']);
firefoxOsApp.run(['$rootScope','$location', function ($rootScope, $location) {

  $rootScope.$on("$routeChangeStart", function(event, currRoute, prevRoute) {

    $rootScope.title = currRoute.$$route.title;

  });

  $rootScope.activeMenu = function(path) {
    return $location.path() === path;
  };

}]);
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
firefoxOsApp.controller('CompreAgoraCtrl', ['$scope', function($scope){


}]);
firefoxOsApp.controller('DescubraCtrl', ['$scope', function($scope){

    var item = 0,
        tempo = '',
        active = '',
        video = 'RWwp-DqQgqk';//preencher o id do video

    function callVideo() {

        ct_video = $("#fo-video");

        $('.fo-play').click(function(e){
            e.preventDefault();

            $(this).css('display', 'none');
            ct_video.css('display', 'block');
            ct_video.attr('src', "//www.youtube.com/embed/"+ video +"?autoplay=1");

        })

    };

    callVideo();

    function resize() {
        var element = $('#fo-content');

        if( window.innerHeight < 480 ) {
            element.css('height', '135%');
        } else {
            element.css('height', '100%');
        }

    };

    resize();

}]);
firefoxOsApp.controller('HomeCtrl', ['$scope', function($scope){

}]);
firefoxOsApp.controller('VantagensCtrl', ['$scope', function($scope){

}]);

firefoxOsApp.controller('VantagensCarouselCtrl', ['$rootScope', '$scope', '$routeParams', function($rootScope, $scope, $routeParams){

    $rootScope.hideNav = true;

    $scope.showMenu = function() {
        $rootScope.hideNav = false;
    };

}]);


firefoxOsApp.directive('carousel', ['$routeParams', function($routeParams){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($location) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller, $location) {

            var flipsnap = Flipsnap( '.mask' );

            flipsnap.moveToPoint($routeParams.id - 1, 0);

            if( $routeParams.id - 1 == 0 ) {
                $('.galeria-nav-prev').hide();
            } else if( $routeParams.id - 1 == $('.mask article').length -1 ) {
                $('.galeria-nav-next').hide();
            }

            function hideButton() {

                if ( !flipsnap.hasNext() ) {
                    $('.galeria-nav-next').hide();
                } else {
                    $('.galeria-nav-next').show();
                }

                if( !flipsnap.hasPrev() ) {
                    $('.galeria-nav-prev').hide();
                } else {
                    $('.galeria-nav-prev').show();
                }

            };

            var $next = $('.galeria-nav-next').click(function() {
                flipsnap.toNext();
                hideButton();
            });

            var $prev = $('.galeria-nav-prev').click(function() {
                flipsnap.toPrev();
                hideButton();
            });

            flipsnap.element.addEventListener('fspointmove', function() {
                if ( !flipsnap.hasNext() ) {
                    $('.galeria-nav-next').hide();
                } else {
                    $('.galeria-nav-next').show();
                }

                if( !flipsnap.hasPrev() ) {
                    $('.galeria-nav-prev').hide();
                } else {
                    $('.galeria-nav-prev').show();
                }
            }, false);

            $(window).resize(function() {
                flipsnap.refresh();
            });

        }
    };
}]);
firefoxOsApp.directive('load', ['$routeParams', function($routeParams){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($location) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller, $location) {
            $('#loading').hide();
        }
    };
}]);