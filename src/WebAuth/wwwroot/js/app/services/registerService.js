﻿(function () {
    'use strict';

    angular
        .module('registerApp')
        .service('registerService', registerService);

    registerService.$inject = ['$http'];

    function registerService($http) {

        function verifyEmail(key, code) {
            return $http.post('/signup/verifyEmail', {key: key, code: code})
                .then(function (data) {
                    return data.data;
                });
        }

        function resendCode(key) {
            return $http.post('/signup/resendCode', '\''+ key + '\'')
                .then(function (data) {
                    return data.data;
                });
        }

        function register(model) {
            return $http.post('/signup/complete', model)
                .then(function (data) {
                    return data.data;
                });
        }
        return {
            verifyEmail: verifyEmail,
            resendCode: resendCode,
            register: register
        }
    }
})();
