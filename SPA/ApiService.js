﻿var ApiService = function ($http) {
    var result;
    this.GetApiCall = function (controllerName, method, callback) {
        debugger
        result = $http.get('api/' + controllerName + '/' + method).success(
           function (data, status) {
               var event = {
                   result: data,
                   hasErrors: false
               };
               callback(event);
           }).error(
            function (data, status) {
                var event = {
                    result: "",
                    hasErrors: true,
                    error: data
                };
                callback(event);
            }
        );
    }
}