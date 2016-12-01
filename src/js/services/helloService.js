var myApp = angular.module('myApp');

myApp.service('helloService',['$q','httpService',function($q,httpService){

	httpService.addReqConfig([{
            name: 'checkBlackList',
            url: '/checkBlackList',
            retry: true,
            isMock: true,
        }]);

	this.getData = function(name,params){

		var defer = $q.defer();
		var promise = httpService.getResponse(name,params);
		promise.then(function(data){
			defer.resolve(data);
		},function(data){
			defer.reject(data);
		});

		return defer.promise;
	}

}]);
