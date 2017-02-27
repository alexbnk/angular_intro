app.controller('myAppCtrl', function($scope) {
  $scope.brother = "Jon Snow";
});

app.controller('randCtrl', function($scope) {
  $scope.getRand = function(){
    $scope.rand = Math.floor(Math.random()*100);
  };
});


app.controller('girlsCtrl', function($scope) {
  $scope.girlsWhoHaveRejectedMe = ['Lucy', 'Yael', 'Jillian', 'Sofie'];
});


app.controller('twoWayCtrl', function($scope) {
  $scope.bound = "Voracious"

  $scope.showTwoWay = function(){
    console.log($scope.bound);
    $scope.boundAfter = Date();
  }
});


app.controller('1Ctrl', function($scope) {
  $scope.list = [];
  $scope.insertToArray = function(){
    $scope.list.push($scope.valToArray);
  }
  $scope.deleteFromArray = function($index){
    $scope.list.splice($index,1);
  }
});
