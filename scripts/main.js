(function (window) {
 'use strict';
 var FORM_SELECTOR = '[data-movie-demand="form"]';
 var CHECKLIST_SELECTOR = '[data-movie-demand="checklist"]';
var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
 var App = window.App;
 var portal = App.portal;
 var DataStore = App.DataStore;
 var RemoteDataStore = App.RemoteDataStore;
 var FormHandler = App.FormHandler;
 var Validation = App.Validation;
 var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
 var mymovie = new portal('701', remoteDS);
 window.mymovie = mymovie;
 var checkList = new CheckList(CHECKLIST_SELECTOR);
 checkList.addClickHandler(mymovie.getinvoice.bind(mymovie));
 var formHandler = new FormHandler(FORM_SELECTOR);

 formHandler.addSubmitHandler(function (data) {
 console.log(formHandler);
 mymovie.createOrder.call(mymovie, data);
 checkList.addRow.call(checkList, data);
 });
  formHandler.addInputHandler(Validation.isPrimemember);
})(window);
