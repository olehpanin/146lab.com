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

            $translateProvider.preferredLanguage( getBrowserLanguage() );

            function getBrowserLanguage(){
                var language = navigator.language || navigator.userLanguage;

                if( language && language.length > 0 ){
                    language = language.substr(0, 2);
                } else {
                    language = "en";
                }

                return language;
            }
        });
})();