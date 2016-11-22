thailuxuryApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
  		.when('/', {
  			templateUrl: 'app/components/home/view.html'
  		})

		.when('/hotels.resorts', {
  			templateUrl: 'app/components/hotels.resorts/view.html'
  		})
	
		.when('/find.dining', {
  			templateUrl: 'app/components/dining/view.html'
  		})

		.when('/once.lift.time', {
  			templateUrl: 'app/components/once.lifetime/view.html',
			controller: 'onceLiftController'
  		})

		.when('/after.dark', {
  			templateUrl: 'app/components/after.dark/view.html'
  		})


		.when('/made.thailand', {
  			templateUrl: 'app/components/made.thailand/view.html'
  		})


		.when('/wellness', {
  			templateUrl: 'app/components/wellness/view.html'
  		})


		.when('/medical.tourism', {
  			templateUrl: 'app/components/medical.tourism/view.html'
  		})

		.when('/contact', {
  			templateUrl: 'app/components/connection/view.html'
  		})


			

	.otherwise(
      {redirectTo:'/'}
    );

		$locationProvider.html5Mode(true);
}]);
