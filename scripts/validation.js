(function(window) {
  'use strict';
  var App = window.App || {};
  var Validation = {
    isPrimemember: function (email){
      return /.+@mmstar\.com$/.test(email);
    }
  };
  App.Validation = Validation;
  window.App = App;
})(window);
