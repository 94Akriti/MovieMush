(function (window) {
 'use strict';
 var FORM_SELECTOR = '[data-movie-demand="form"]';
 var RANGE_SELECTOR = '[data-movie-demand ="threads"]';
 var App = window.App;
 var portal = App.portal;
 var DataStore = App.DataStore;
 var FormHandler = App.FormHandler;
 var RangeHandler = App.RangeHandler;
 var mymovie = new portal('701', new DataStore());
 window.mymovie = mymovie;
 var formHandler = new FormHandler(FORM_SELECTOR);
var rangeHandler = new RangeHandler(RANGE_SELECTOR);
rangeHandler.addRangeHandler();
console.log(RangeHandler);
 formHandler.addSubmitHandler(mymovie.createOrder.bind(mymovie));
 console.log(formHandler);
})(window);
