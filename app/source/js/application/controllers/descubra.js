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