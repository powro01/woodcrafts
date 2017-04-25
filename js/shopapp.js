var app = angular.module('woodCrafts', []);

app.controller('calcPrice', function($scope) {
    
    if($scope.text) {
        $scope.price = function() {
            var int = parseInt($scope.text.length);
            
            return int * 5;
        }
    }
    
});