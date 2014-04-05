var mainCtrl = function($scope, $http) {
  $scope.tasks = [
  {"body":"shopping", "done":false},
  {"body":"study", "done":false},
  {"body":"training", "done":true},
  {"body":"running", "done":false}
  ];

  $scope.addNew = function() {
    $scope.tasks.push({"body":$scope.newTaskBody, "done":false});
    $scope.newTaskBody = '';
  }

  $scope.getDoneCount = function() {
    var count = 0;
    angular.forEach($scope.tasks, function(task){
      count += task.done ? 1 : 0;
    });
    return count;
  }

  $scope.deleteDone = function() {
    var oldTasks = $scope.tasks;
    $scope.tasks = [];
    angular.forEach(oldTasks, function(task){
      if(!task.done) $scope.tasks.push(task);
    });
  }

  $scope.taskDelete = function($index) {
    $scope.tasks.splice($index, 1);
  }
}
