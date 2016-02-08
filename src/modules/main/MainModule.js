var LAB = LAB || {};

(function (){
    "use strict";

    LAB.MainModule = angular.module("Main", ['pascalprecht.translate'])
        .constant("$appConfig", {
            workExamples : [
                {
                    title : "Title 1",
                    image : "imageurl",
                    description : "Description 1",
                    url : "url1"
                },
                {
                    title : "Title 2",
                    image : "imageurl",
                    description : "Description 2",
                    url : "url2"
                }
            ]

        })
        .config(function($locationProvider, $translateProvider){
            $locationProvider.html5Mode({
                enable : false
            });

            // configures staticFilesLoader
            $translateProvider.useStaticFilesLoader({
                prefix: 'localizations/',
                suffix: '.json'
            });

            var defaultLanguage = "en";
            $translateProvider.preferredLanguage( defaultLanguage );
        });
})();