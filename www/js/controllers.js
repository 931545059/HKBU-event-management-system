angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('homeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $http.get("http://localhost:1337/")
        .then(function(response){
          $scope.feeds = response.data;
      });
}])

.controller('eventsCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $http.get("http://localhost:1337/")
        .then(function(response){
          $scope.feeds = response.data;
      });
}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    var map = L.map('map').setView([22.337827, 114.181962], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([22.341072, 114.179645]).addTo(map)
    .bindPopup('AC Hall');

}])
      
.controller('contactUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventDetailsCtrl', ['$scope', '$stateParams', '$http', '$state', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $state, $ionicPopup) {

    $http.get("http://localhost:1337/everyone/view/"+$stateParams.id)
        .then(function(response){
          $scope.feeds = response.data;
      });

    $scope.register = function(){
        var userid = localStorage.getItem('userid');
        $http.post("http://localhost:1337/user/"+userid+"/supervises/add/"+$stateParams.id)
        .then(function (response) {
    
            var confirmPopup = $ionicPopup.confirm({
                template: response.data
            });
// 如果注册成功将会返回register页面，如果取消那就返回原页面
            confirmPopup.then(function (res) {
                if (res) {
                    $state.go('tabsController.registeredEvents');
                } else {
                    $state.go('tabsController.eventDetails');
                }
            });
    
        }, function (response) {
    
            var alertPopup = $ionicPopup.alert({
                template: 'Register failed. Please try again.'
            });
        });
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$http', '$ionicHistory', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicHistory, $ionicPopup) {
    $scope.data = {};
    $scope.login = function () {

        $http.post("http://localhost:1337/user/login", $scope.data)
        .then(function (response) {
    
            // A confirm dialog
            localStorage.setItem('username', $scope.data.username)
            localStorage.setItem('userid', response.data.id)
            var confirmPopup = $ionicPopup.confirm({
                title: 'Welcome back! '+ localStorage.getItem('username'),
                template: 'Go back to previous page?'
            });
    
            confirmPopup.then(function (res) {
                if (res) {
                    $ionicHistory.goBack();
                } else {
                    console.log('granted');
                }
            });
    
        }, function (response) {
    
            var alertPopup = $ionicPopup.alert({
                title: response.data,
                template: 'Login failed. Please try again.'
            });
        });

    }

}])
   
.controller('departmentCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $http.get("http://localhost:1337/")
        .then(function(response){
          $scope.feeds = response.data;
      });
}])
   
.controller('placeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

    $http.get("http://localhost:1337/")
    .then(function(response){
      $scope.feeds = response.data;
  });}])
   
.controller('personCtrl', ['$scope', '$stateParams','$http','$state','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $state, $ionicPopup) {

    $scope.username = localStorage.getItem('username');
    $scope.logout = function () {
        $http.post("http://localhost:1337/user/logout", $scope.data)
          .then(function (response) {
            console.log($scope.data);
            localStorage.removeItem('username')
            $state.go('tabsController.login')
          }, function (response) {
            var alertPopup = $ionicPopup.alert({
              title: response.data,
              template: 'Login failed. Please try again.'
            });
          });
      }


}])
   
.controller('registeredEventsCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    var userid = localStorage.getItem('userid');
    $http.get("http://localhost:1337/user/"+userid+"/supervises/")
        .then(function(response){
        $scope.feeds = response.data;
        console.log(response.data);
      });
}])

 