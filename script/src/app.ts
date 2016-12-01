/// <reference path="_all.ts" />

import * as angular from 'angular';

angular.module('AngularTraining',[])
.controller('test',function(){
this.hello = 'hello';
});

// Bootstrap the angular AirlineInsuranceApp module
angular
    .bootstrap(document.documentElement, ['AngularTraining']);