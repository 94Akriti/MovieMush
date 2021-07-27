(function(window) {
  'use strict';
  var App = window.App || {};
  var Validation = {
    isPrimemember: function (email){
      return /.+@mmstar\.com$/.test(email);
    }
  };

  var Notavailable = {
    isNotavailable: function (name,threads){
    if(name=="brute" && threads>"0"){
      return false;
    }else{
      return true;
    }
  };
  App.Validation = Validation;
  App.Notavailable = Notavailable;
  window.App = App;
})(window);
