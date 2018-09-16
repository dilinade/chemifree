var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/', {

		controllerAs:'loginCtrl',
		templateUrl: '/login.html'
	})
	.when('/users', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/users.partial.html'
	})
	.when('/users/details', {
		controller: 'UserController',
		controllerAs: 'userCtrl',
		templateUrl: '/partials/user.partial.html'
	})
	
	.when('/products', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/products.partial.html'
	})
	.when('/products/details', {
		controller: 'ProductController',
		controllerAs: 'productCtrl',
		templateUrl: '/partials/product.partial.html'
	})

	.when('/orders', {
		controller: 'OrdersController',
		controllerAs: 'ordersCtrl',
		templateUrl: '/partials/orders.partial.html'
	})
	.when('/orders/details', {
		controller: 'OrderController',
		controllerAs: 'orderCtrl',
		templateUrl: '/partials/order.partial.html'
	})

	
	.otherwise('/')
});
app.controller('loginCtrl',function($scope,$location){
    $scope.submit = function () {
        var uname = $scope.username;
        var password = $scope.password;
        if($scope.username == 'd' && $scope.password == 'd'){
            $location.path('/orders');
        }

    };
});

