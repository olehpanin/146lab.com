var LAB = LAB || {};

(function(){
    "use strict";

    LAB.MainModule.controller("MainController", MainController);

    MainController.$inject = ["$appConfig"];

    function MainController( $appConfig ){
        var vm = this;

        vm.setLanguage = setLanguage;

        vm.todayDate = new Date();

        function setLanguage( language ){
            console.log( language );

        }
    }
})();