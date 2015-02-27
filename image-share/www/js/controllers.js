/**
 * Created by Junaid-Pc on 2/27/2015.
 */
angular.module('com.htmlxprs.imageShare.controllers',[]).controller('HomeController',['$scope','USER','$state',function($scope,USER,$state){
    $scope.user={};
    $scope.next=function(){
        USER.name=$scope.user.name;
        $state.go('chat');
    }
}]);