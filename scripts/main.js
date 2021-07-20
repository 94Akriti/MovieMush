(function (window) {
 'use strict';
 var App = window.App;
 var portal = App.portal;
 var DataStore = App.DataStore;
 var mymovie = new portal('701', new DataStore());
 window.mymovie = mymovie;
})(window);
