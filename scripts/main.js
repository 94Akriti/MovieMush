(function (window) {
 'use strict';
 var FORM_SELECTOR = '[data-movie-demand="form"]';
 var App = window.App;
 var portal = App.portal;
 var DataStore = App.DataStore;
 var FormHandler = App.FormHandler;
 var mymovie = new portal('701', new DataStore());
 window.mymovie = mymovie;
 var formHandler = new FormHandler(FORM_SELECTOR);

 formHandler.addSubmitHandler(mymovie.createOrder.bind(mymovie));
 console.log(formHandler);
})(window);
