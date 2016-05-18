// public/js/services/LoginService.js
/*
angular.module('LoginService', []).factory('Login', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/login');
        },
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(loginData) {
            return $http.post('/api/login', loginData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/login/' + id);
        }
    }       

}]);
*/
angular.module('LoginService', ['SessionService']).factory('loginService', function ($http , $location , $rootScope, sessionService ) {
    return{
        login: function(scope) {
            console.log("dasfsdgsdgdf");
            sessionService.set('success',1);
            /*
            $http({
                url: 'http://dev.nddspapi.askmebazaar.com/login',
                method: 'POST',
                data: {
                    username: scope.username,
                    password: scope.password
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function (data, status, headers, config) {
                if(data.success == true) {
                    //$rootScope.loggedIn = true;
                    sessionService.set('success',data.success);
                    sessionService.set('username',data.result.username);
                    $location.path('assets/views/dashboard');
                }
                else {
                    alert("ascvhascas");
                }
            }).error(function (data, status, header, config) {
                $location.path('/');
            });*/
        },
        logout: function() {
            sessionService.destroy('success');
            sessionService.destroy('username');
            $location.path('assets/views/login');
            //$location.path('/');
            //return true;
            
        },
        isLogged: function() {
            if(sessionService.get('uid')) {
                return true;
            }
            else {
                return false;
            }
        },
        getSessionVariable: function(key) {
            return sessionService.get(key);
        },
        
    };
});

// angular.module('SessionService', []).factory('sessionService', ['$http', function ($http) {
//     return{
//         set: function(key,value) {
//             console.log("Afdsfsd");
//             //return sessionStorage.setItem(key,value);
//         },
//         get: function(key) {
//             return sessionStorage.getItem(key);
//         },
//         destroy: function(key) {
//             return sessionStorage.removeItem(key);
//         },
//     };
// }]);