/// <reference path="_all.ts" />
"use strict";
var angular = require('angular');
angular.module('AngularTraining', [])
    .controller('test', hello);
function hello() {
    this.hello = 'hello';
}
// Bootstrap the angular AirlineInsuranceApp module
angular
    .bootstrap(document.documentElement, ['AngularTraining']);
