'use strict';

angular
  .module('unit2App', [
    'ngRoute'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

(function () {
  'use strict';

  var HomeController = ["productService", function (productService) {
    var _this = this;
    _this.products = [];

    productService.getProducts()
      .then(function (data) { _this.products = data; });
  }];

  HomeController.$inject = ['ProductService'];
  angular.module('unit2App').controller('HomeController', HomeController);
}());

(function () {
  'use strict';

  var SearchController = ["productService", function (productService) {
    var _this = this;
    _this.products = [];

    productService.find()
      .then(function (data) { _this.products = data; });
  }];

  SearchController.$inject = ['ProductService'];
  angular.module('unit2App').controller('SearchController', SearchController);
}());

(function () {
  'use strict';

  var ProductService = ["$http", function ($http) {
    this.$http = $http;
  }];

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
