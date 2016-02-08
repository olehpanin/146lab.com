var LAB = LAB || {};

(function(){
    "use strict";

    LAB.MainModule.controller("MainController", MainController);

    MainController.$inject = ["$appConfig", "$scope"];

    function MainController( $appConfig, $scope ){
        var vm = this;

        var todayDate = new Date();
        $scope.todayDate = todayDate;

        console.log("main controller is here");

        console.log( $appConfig );

        console.log("Hey");
    }
})();