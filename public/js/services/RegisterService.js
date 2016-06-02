angular.module('RegisterService', []).factory('registerService', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/login');
        },
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(loginData) {
            console.log("fsdfdsfsdsdsf");
            $http({
                url: '/api/register',
                method: 'POST',
                data: {
                    employee_id : loginData.employeeid,
                    employee_name : loginData.employeename,
                    employee_passwd : loginData.passwd,
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function (data, status, headers, config) {
                console.log(data);
                console.log(status);
                // if(data.success == true) {
                //     //$rootScope.loggedIn = true;
                //     sessionService.set('success',data.success);
                //     sessionService.set('username',data.result.username);
                //     $location.path('assets/views/dashboard');
                // }
                // else {
                //     alert("ascvhascas");
                // }
            }).error(function (data, status, header, config) {
                //$location.path('/');
            });
            //return $http.post('/api/login', loginData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/login/' + id);
        }
    }       

}]);
