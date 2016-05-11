var LAB = LAB || {};

(function (){
    "use strict";

    LAB.MainModule = angular.module("Main", ['pascalprecht.translate'])
        .constant("$appConfig", {
            workExamples : [
                {
                    title : "Andia",
                    image : "/img/andia.jpg",
                    description : "Description 1",
                    url : "/examples/Andia1/index.html"
                },
                {
                    title : "Climate harmony",
                    image : "/img/climate.jpg",
                    description : "Description 2",
                    url : "/examples/climate/index.html"
                },
                {
                    title : "Otrada company",
                    image : "/img/company.jpg",
                    description : "Description 3",
                    url : "/examples/company/index.html"
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

            $translateProvider.useSanitizeValueStrategy(null);

            function getBrowserLanguage(){
                var language = navigator.language || navigator.userLanguage;

                if( language && language.length > 0 ){
                    language = language.substr(0, 2);
                } else {
                    language = "en";
                }

                //language = "en";
                return language;
            }
        });
})();