var LAB = LAB || {};

(function(){
    "use strict";

    LAB.MainModule.controller("MainController", MainController);

    MainController.$inject = ["$appConfig"];

    function MainController( $appConfig ){
        var vm = this;

        var todayDate = new Date();
        vm.todayDate = todayDate;

        console.log("main controller is here");

        console.log( $appConfig );

        console.log("Hey");
    }
})();