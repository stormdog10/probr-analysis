'use strict';

angular.module('probrAnalysisVendors')
    .config(function ($stateProvider) {
        $stateProvider
            .state('vendors', {
                url: '/vendors',
                templateUrl: 'app/modules/probrAnalysisVendors/vendors/vendors.html',
                controller: 'VendorsCtrl'
            });
        ;
    });