
angular.module('starter.controllers', [])

.controller('LatestNewsController', function($scope, $http, $ionicModal, $timeout, $state, $rootScope) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsdefaultfeeds.cms?feedtype=json'})
    .success(function(data,status){
      $scope.input = data.NewsItem;
      console.log($scope.input);
      // console.log(data.NewsItem.length);
       // for (i=0; i<data.NewsItem.length; i++){
       //  //  console.log(data.NewsItem[i].HeadLine);
       // }
    });
  };
  $scope.init = function(){
    $scope.getItems();
  };

  $scope.storyFn = function(stry){
    // console.log(stry);
    $state.go('app.latest_detail');
    $rootScope.story = stry;
    // console.log($scope.story);
  // $scope.story = story;
  // console.log($scope.story);
  };
})

.controller('WorldNewsController', function($scope, $http, $ionicModal, $timeout, $state, $rootScope) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/296589292.cms?feedtype=sjson'})
    .success(function(data,status){
      $scope.input = data.NewsItem;
       console.log($scope.input);
      // console.log(data.NewsItem.length);
       for (i=0; i<data.NewsItem.length; i++){
          // console.log(data.NewsItem[i].HeadLine);
       }
    });
  };
  $scope.init = function(){
    $scope.getItems();
  };

  $scope.storyFn = function(stry){
    // console.log(stry);
    $state.go('app.world_detail');
    $rootScope.story = stry;
    // console.log($scope.story);
  // $scope.story = story;
  // console.log($scope.story);
  };
})

.controller('SportsNewsController', function($scope, $http, $ionicModal, $timeout, $state, $rootScope) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/4719148.cms?feedtype=sjson'})
    .success(function(data,status){
      $scope.input = data.NewsItem;
       console.log($scope.input);
      // console.log(data.NewsItem.length);
      //  for (i=0; i<data.NewsItem.length; i++){
      //     // console.log(data.NewsItem[i].HeadLine);
      //  }
    });
  };
  $scope.init = function(){
    $scope.getItems();
  };

  $scope.storyFn = function(stry){
    // console.log(stry);
    $state.go('app.sports_detail');
    $rootScope.story = stry;
    // console.log($scope.story);
  // $scope.story = story;
  // console.log($scope.story);
  };
})

.controller('BusinessNewsController', function($scope, $http, $ionicModal, $timeout, $state, $rootScope) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/1898055.cms?feedtype=sjson'})
    .success(function(data,status){
      $scope.input = data.NewsItem;
       console.log($scope.input);
      // console.log(data.NewsItem.length);
       for (i=0; i<data.NewsItem.length; i++){
          // console.log(data.NewsItem[i].HeadLine);
       }
    });
  };
  $scope.init = function(){
    $scope.getItems();
  };

  $scope.storyFn = function(stry){
    // console.log(stry);
    $state.go('app.detail');
    $rootScope.story = stry;
    // console.log($scope.story);
  // $scope.story = story;
  // console.log($scope.story);
  };
  // $scope.hello = "hello master";
})

// .controller('BusinessDetailsController', function($scope, $http, $ionicModal, $timeout, $stateParams) {
//   $scope.getItems = function(){
//     $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/1898055.cms?feedtype=sjson'})
//     .success(function($scope,$stateParams){
//       $scope.NewsItemId = $stateParams.NewsItemId;
//        console.log($scope.NewsItemId);
//       // console.log(data.NewsItem.length);
//        for (i=0; i<data.NewsItem.length; i++){
//           console.log(data.NewsItem[i].HeadLine);
//        }

//     });
//   };
//   $scope.getItems();
// })

.controller('TechNewsController', function($scope, $http, $ionicModal, $timeout, $state, $rootScope) {
  $scope.getItems = function(){
    $http({method: 'GET',url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/5880659.cms?feedtype=sjson'})
    .success(function(data,status){
      $scope.input = data.NewsItem;
      //  console.log($scope.input);
      //  console.log(data.NewsItem.length);
       for (i=0; i<data.NewsItem.length; i++){
          // console.log(data.NewsItem[i].HeadLine);
       }
    });
  };
  $scope.init = function(){
    $scope.getItems();
  };

  $scope.storyFn = function(stry){
    // console.log(stry);
    $state.go('app.latest_detail');
    $rootScope.story = stry;
    // console.log($scope.story);
  // $scope.story = story;
  // console.log($scope.story);
  };
});