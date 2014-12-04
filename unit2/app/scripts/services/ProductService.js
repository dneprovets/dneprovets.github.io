(function () {
  'use strict';

  var ProductService = function ($http) {
    this.$http = $http;
  };

  ProductService.$inject = ['$http'];

  ProductService.prototype = {

    getProducts: function () {
      return this.$http.get('/data/products-featured.json')
        .then(function (resp) { return resp.data; });
    },

    find: function () {
      return this.$http.get('/data/products-search.json')
        .then(function (resp) { return resp.data; });
    }
  };

  angular.module('unit2App').service('ProductService', ProductService);
}());
