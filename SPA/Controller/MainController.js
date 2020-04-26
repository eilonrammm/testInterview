var MainController = function ($scope, Api, $filter) {
    debugger
    $scope.models = {
        items: [
        ]
    };
    $scope.selectedLocation = null;

    var orderBy = $filter('orderBy');
    var reverse = null;
    $scope.order = function (predicate, reverse) {
        $scope.models.items = orderBy($scope.models.items, predicate, reverse);
    };
    $scope.name = "";

    $scope.filtered = $scope.models.items;

    $scope.$watchCollection('filtered', function (newvalue, oldvalue) {
        console.log($scope.filtered.length);
    });

    $scope.showDetails = function (item) {
        debugger
        $scope.choosenItem = item;
        $('#myModal').modal('show');
    }
    function GetLocations() {
        debugger
        SetBusy($("#LocationSelector"));
        debugger
        Api.GetApiCall("MovieAndSeries", "GetLocations", function (event) {
            debugger
            SetBusy($("#LocationSelector"), true);
            debugger
            if (event.hasErrors == true) {
                $scope.setError(event.error);
            } else {
                $scope.models.items = event.result;
                if ($scope.models.items.length > 0) {
                    $scope.selectedLocation = $scope.models.items[0];
                }
            }
        });
        debugger
    }

    GetLocations();

}

MainController.$inject = ['$scope', 'Api', '$filter'];