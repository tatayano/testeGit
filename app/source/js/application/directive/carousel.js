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