var app = angular.module('myApp',[])
app.controller('myCtrl', function($scope, $http){
alert('HI');
    $scope.Test="Irshad";
    $http.post("https://apiqa.indiacover360.com/MasterService.svc/web/GetCityList")
    .then(function(response){
        $scope.getCityList=response.data;
    });
});