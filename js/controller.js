/* ============= Carousel Slider ============= */
angular.module('app', ['ui.bootstrap']);

function CarouselDemoCtrl($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [
      {
        image: 'img/bienvenido.JPG'
      },
      {
        image: 'img/nosotros.png'
      },
      {
        image: 'img/bienvenido.JPG'
      }
    ];
}
