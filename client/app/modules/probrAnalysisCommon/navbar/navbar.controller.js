'use strict';

angular.module('probrAnalysisCommon')
    .controller('NavbarCtrl', function ($scope, $location) {

        $scope.menu = [
            {
                'title': 'Packets',
                'link': 'packets'
            },
            {
                'title': 'Room Utilization',
                'link': 'utilization'
            },
            {
                'title':'Map',
                'link':'map'
            }
        ];

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.isActiveRoot = function (route) {
            var subStr = $location.path().split("/")[1];
            return route.indexOf(subStr.substr(0, subStr.length - 1)) !== -1;
        };

    });