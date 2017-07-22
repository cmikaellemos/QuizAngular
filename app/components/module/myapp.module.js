(function () {
    var configFunction = function ($stateProvider, $urlRouterProvider) {

        var index = {
            name: 'index',
            url: '/',
            templateUrl: 'components/templates/index.html',
            controller: 'IndexController'
        };

        var showQuestions = {
            name: 'showQuestions',
            url: '/showQuestions',
            templateUrl: 'components/templates/show-questions.html',
            controller: 'QuestionsController',
            params: {
                obj: null
            }
        };

        var showOptions = {
            name: 'showOptions',
            url: '/showQuestions',
            templateUrl: 'components/templates/show-options.html',
            controller: 'QuestionsController'
        };

        $stateProvider.state(index);
        $stateProvider.state(showQuestions);
        $stateProvider.state(showOptions);
        $urlRouterProvider.otherwise('/');
    }

    angular.module('MyApp', ['ui.router', 'ngMaterial']).config(configFunction);
}());