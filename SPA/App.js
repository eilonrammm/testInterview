var App = angular.module('App', ['ngRoute', 'ui.bootstrap']);
App.service('Api', ['$http', ApiService]);
App.controller('MainController', MainController);

App.run(function ($rootScope, $timeout) {
    $rootScope.errorMessage = "";
    $rootScope.isError = false;

    $rootScope.setError = function (errorMessage) {
        $rootScope.errorMessage = errorMessage;
        if (errorMessage != null && errorMessage != "") {
            $rootScope.isError = true;
        } else {
            $rootScope.isError = false;
        }
        $timeout(function () {
            $rootScope.setError(null);
        }, 3000);
    }
});


function SetBusy(element, hide) {
    if (hide == true) {
        element.LoadingOverlay("hide");
    } else {
        element.LoadingOverlay("show", {
            image: "",
            fontawesome: "fa fa-spinner fa-spin"
        });
    }
}