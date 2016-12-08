// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'vistas/inicio.html',
            controller  : 'mainController'
        })
        .when('/nosotros', {
            templateUrl : 'vistas/nosotros.html',
            controller  : 'aboutController'
        })
        .when('/portafolio', {
            templateUrl : 'vistas/portafolio.html',
            controller  : 'portafolioController'
        })
        .when('/contact', {
            templateUrl : 'vistas/contacto.html',
            controller  : 'contactoController'
        })



        .otherwise({
            redirectTo: '/'
        });
});

angularRoutingApp.controller('mainController', function($scope) {

});

angularRoutingApp.controller('aboutController', function($scope) {

});

angularRoutingApp.controller('portafolioController', function($scope) {

});

angularRoutingApp.controller('contactoController', function($scope) {

});
