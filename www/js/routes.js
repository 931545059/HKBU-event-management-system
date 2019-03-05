angular.module('app.routes', ['ionicUIRouter'])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('tabsController.home', {
        url: '/page2',
        views: {
          'tab1': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          }
        }
      })

      /* 
        The IonicUIRouter.js UI-Router Modification is being used for this route.
        To navigate to this route, do NOT use a URL. Instead use one of the following:
          1) Using the ui-sref HTML attribute:
            ui-sref='tabsController.events'
          2) Using $state.go programatically:
            $state.go('tabsController.events');
        This allows your app to figure out which Tab to open this page in on the fly.
        If you're setting a Tabs default page or modifying the .otherwise for your app and
        must use a URL, use one of the following:
          /page1/tab2/page3
          /page1/tab3/page3
      */
      .state('tabsController.events', {
        url: '/page3',
        views: {
          'tab2': {
            templateUrl: 'templates/events.html',
            controller: 'eventsCtrl'
          },
          'tab3': {
            templateUrl: 'templates/events.html',
            controller: 'eventsCtrl'
          }
        }
      })

      .state('tabsController.map', {
        url: '/page4',
        views: {
          'tab1': {
            templateUrl: 'templates/map.html',
            controller: 'mapCtrl'
          },
          'tab2': {
            templateUrl: 'templates/map.html',
            controller: 'mapCtrl'
          },
          'tab3': {
            templateUrl: 'templates/map.html',
            controller: 'mapCtrl'
          },
          'tab4': {
            templateUrl: 'templates/map.html',
            controller: 'mapCtrl'
          }
        }

      })

      .state('tabsController', {
        url: '/page1',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

      .state('contactUs', {
        url: '/page7',
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      })

      .state('tabsController.eventDetails', {
        url: '/page8/:id',
        views: {
          'tab1': {
            templateUrl: 'templates/eventDetails.html',
            controller: 'eventDetailsCtrl'
          },
          'tab2': {
            templateUrl: 'templates/eventDetails.html',
            controller: 'eventDetailsCtrl'
          },
          'tab3': {
            templateUrl: 'templates/eventDetails.html',
            controller: 'eventDetailsCtrl'
          },
          'tab4': {
            templateUrl: 'templates/eventDetails.html',
            controller: 'eventDetailsCtrl'
          }
        }

      })

      .state('tabsController.login', {
        url: '/page10',
        views: {
          'tab4': {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
          }
        }
      })

      .state('tabsController.department', {
        url: '/page11',
        views: {
          'tab2': {
            templateUrl: 'templates/department.html',
            controller: 'departmentCtrl'
          }
        }
      })

      .state('tabsController.place', {
        url: '/page12',
        views: {
          'tab3': {
            templateUrl: 'templates/place.html',
            controller: 'placeCtrl'
          }
        }
      })

      .state('tabsController.person', {
        url: '/page13',
        views: {
          'tab4': {
            templateUrl: 'templates/person.html',
            controller: 'personCtrl'
          }
        }
      })

      .state('tabsController.registeredEvents', {
        url: '/page14',
        views: {
          'tab4': {
            templateUrl: 'templates/registeredEvents.html',
            controller: 'registeredEventsCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/page1/page2')


  });