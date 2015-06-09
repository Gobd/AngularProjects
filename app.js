angular.module('SimpleTodo',['ngAnimate'])
.controller('buttonCtrl',function($scope){
    $scope.todos = ['CLEAN','water','car'];
    $scope.done=function($index){
        $scope.todos.splice($index,1);
    }
        $scope.addToDo=function(newtodo){
            $scope.todos.push(newtodo);
        }
});