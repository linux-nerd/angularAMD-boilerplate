define(["angularAMD", "angular-route", "ui-bootstrap"], function(angularAMD){
    "use strict";

    var app = angular.module("app", ["ui.router", "ui.bootstrap"]);

    //route
    app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider

            //Home States and nested views
            .state("home", angularAMD.route({
                url: "/home",
                templateUrl: "components/home/template/partial-home.html",
                controller: "homeController as home",
                controllerUrl: 'home/controller/home'
            }))

            //About States and nested views
            .state("about", angularAMD.route({
                url: "/about",
                templateUrl: "components/about/template/partial-about.html",
                controller: "aboutController as about",
                controllerUrl: 'about/controller/about'
            }));

        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    }]);



    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app, false, document.getElementsByTagName("body")[0]);
});