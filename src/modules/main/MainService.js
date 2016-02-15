var LAB = LAB || {};

(function(){
    "use strict";

    LAB.MainModule.service("MainService", MainService);

    MainService.$inject = [];

    function MainService(){
        var service = this;

        service.getBrowserLanguage = getBrowserLanguage;

        function getBrowserLanguage(){
            return "en";
        }
    }
})();