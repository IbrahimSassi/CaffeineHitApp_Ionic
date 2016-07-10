var app = angular.module('caffeinehit.controllers', []);

app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;

    $scope.doRefresh = function () {
        if(!$scope.yelp.isLoading)
        {
          $scope.yelp.refresh().then(function () {

              $scope.$broadcast('scroll.refreshComplete');
          });
        }
    };


    $scope.loadMore = function () {
        console.log('loading moreee');
        if(!$scope.yelp.isLoading && $scope.yelp.hasMore)
        {
            $scope.yelp.next().then(function () {


                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        }

    };


    $scope.getDirections = function (cafe) {
        console.log('Gettin Map');
    }
    $scope.openMap = function (cafe) {
        console.log('openMap');
    }

});
