(function () {
    var MyAppModule = angular.module('MyApp');

    var IndexController = function ($scope, $state) {
        $scope.data = ['Historia', 'Geografia', 'Quimica', 'Biologia'];

        $scope.showQuestions = function(obj) {
            $state.go('showQuestions', {obj: obj});
        };

        $scope.wait = false;

        $scope.selected = function () {
          this.wait = true;
        };
    };

    IndexController.$inject = ['$scope', '$state'];

    MyAppModule.controller('IndexController', IndexController);

}());