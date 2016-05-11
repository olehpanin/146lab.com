var LAB = LAB || {};

(function(){
    "use strict";

    LAB.MainModule.controller("MainController", MainController);

    MainController.$inject = ["$appConfig", "$translate"];

    function MainController( $appConfig, $translate ){
        var vm = this;

        vm.workExamples = [];
        vm.setLanguage = setLanguage;

        vm.todayDate = new Date();

        function setLanguage( language ){
            $translate.use( language );
        }

        vm.workExamples = $appConfig.workExamples;
    }
})();