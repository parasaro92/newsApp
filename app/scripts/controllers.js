
angular.module('starter.controllers', [])

.controller('LatestNewsController', function($scope, $http, $ionicModal, $timeout) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsdefaultfeeds.cms?feedtype=json'})
    .success(function(data,status){
      $scope.input = data;
      // console.log($scope.input);
      // console.log(data.NewsItem.length);
       for (i=0; i<data.NewsItem.length; i++){
        //  console.log(data.NewsItem[i].HeadLine);
       }
    });
  };
  $scope.getItems();
})

.controller('WorldNewsController', function($scope, $http, $ionicModal, $timeout) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/296589292.cms?feedtype=sjson'})
    .success(function(data,status){
      $scope.input = data;
      //  console.log($scope.input);
      // console.log(data.NewsItem.length);
       for (i=0; i<data.NewsItem.length; i++){
          // console.log(data.NewsItem[i].HeadLine);
       }
    });
  };
  $scope.getItems();
})

.controller('SportsNewsController', function($scope, $http, $ionicModal, $timeout) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/4719148.cms?feedtype=sjson'})
    .success(function(data,status){
      $scope.input = data;
       console.log($scope.input);
      console.log(data.NewsItem.length);
       for (i=0; i<data.NewsItem.length; i++){
          // console.log(data.NewsItem[i].HeadLine);
       }
    });
  };
  $scope.getItems();
})

.controller('BusinessNewsController', function($scope, $http, $ionicModal, $timeout) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/1898055.cms?feedtype=sjson'})
    .success(function(data,status){
      $scope.input = data;
      //  console.log($scope.input);
      // console.log(data.NewsItem.length);
       for (i=0; i<data.NewsItem.length; i++){
          // console.log(data.NewsItem[i].HeadLine);
       }
    });
  };
  $scope.getItems();
})

.controller('TechNewsController', function($scope, $http, $ionicModal, $timeout) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/5880659.cms?feedtype=sjson'})
    .success(function(data,status){
      $scope.input = data;
      //  console.log($scope.input);
      //  console.log(data.NewsItem.length);
       for (i=0; i<data.NewsItem.length; i++){
          // console.log(data.NewsItem[i].HeadLine);
       }
    });
  };
  $scope.getItems();
})
