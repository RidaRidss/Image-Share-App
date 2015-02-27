// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
angular.module('imageShare', ['ionic','com.htmlxprs.imageShare.controllers','com.htmlxprs.imageShare.services','com.htmlxprs.imageShare.directives'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $state.go('home');
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(['$stateProvider',function($stateProvider){
  $stateProvider.state('home',{
    url:'/home',
    controller:'HomeController',
    templateUrl:'views/home.html'
  }).state('chat',{
    url:'/chat',
    controller:'ChatController',
    templateUrl:'views/chat.html'
  });
}]);