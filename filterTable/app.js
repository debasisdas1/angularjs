(function () {
'use strict';
angular.module('TableFilterApp', [])
.controller('TableFilterAppController', TableFilterAppController);

TableFilterAppController.$inject = ['$scope'];
function TableFilterAppController($scope) {
$scope.sortType='firstName';
$scope.sortReverse  = false;
$scope.searchQuery = '';
$scope.employees = [
  {empId:1000,firstName:'John',lastName:'Doe',emailId:'johndoe@knowstack.com'},
  {empId:1001,firstName:'Jane',lastName:'Doe',emailId:'janedoe@knowstack.com'},
  {empId:1002,firstName:'Mary',lastName:'Jane',emailId:'maryjane@knowstack.com'},
  {empId:1003,firstName:'William',lastName:'Smith',emailId:'williamsmith@knowstack.com'},
  {empId:1004,firstName:'Nishant',lastName:'Singh',emailId:'nishantsingh@knowstack.com'},
  {empId:1005,firstName:'Nishant',lastName:'Nishanko',emailId:'nishantnishanko@knowstack.com'},
  {empId:1006,firstName:'Robert',lastName:'Baratheon',emailId:'robert@knowstack.com'},
  {empId:1007,firstName:'Eddard',lastName:'Stark',emailId:'eddard@knowstack.com'},
  {empId:1008,firstName:'John',lastName:'Snow',emailId:'johnsnow@knowstack.com'},
  {empId:1009,firstName:'Rob',lastName:'Stark',emailId:'robstark@knowstack.com'},
];
}
})();
