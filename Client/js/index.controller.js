angular.module('app').controller('indexController', function($scope, $http, chipotleService) {

    $scope.chipotleData = [];

    $scope.map = {
        center: {
            latitude: 37,
            longitude: -103
        },
        zoom: 12
    };

    $scope.getZip = function () {
        chipotleService.getRestaurants($scope.inputBox).then(function (data) {
            $scope.chipotleData = data;

            $scope.map.center = {
                latitude: $scope.chipotleData[0].address.latitude,
                longitude: $scope.chipotleData[0].address.longitude,
            };
        });
    }
});
