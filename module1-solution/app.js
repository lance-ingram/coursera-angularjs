(function () {
    'use strict';

    angular.module('Module1App', [])
    .controller('Module1AppController', Module1AppController);

    Module1AppController.$inject = ['$scope'];
    function Module1AppController($scope){
      $scope.lunchItems = "";
      $scope.displayMessage = "";

      $scope.updateDisplay = function(){
        $scope.displayMessage = determineDisplay();
        };

      function checkNoOfItems(items){
        var splitItems = items.split(",");
        var noOfItems = 0;
        for(var index =0; index< splitItems.length; index++){
          if(splitItems[index] != "" && splitItems[index] != " ")
            noOfItems++;
        }
        return noOfItems;
      };

      function determineDisplay(){
        var message = "";
        if(checkNoOfItems($scope.lunchItems) > 0  && checkNoOfItems($scope.lunchItems) <= 3)
          message = "Enjoy";
        else if (checkNoOfItems($scope.lunchItems)>3) {
          message = "Too much!";
        }
        else {
          message = "Please enter data first";
        }
        return message;
      }
    }
  })();
