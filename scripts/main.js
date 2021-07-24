(function (window) {
 'use strict';
 var FORM_SELECTOR = '[data-movie-demand="form"]';
 var CHECKLIST_SELECTOR = '[data-movie-demand="checklist"]';

 var App = window.App;
 var portal = App.portal;
 var DataStore = App.DataStore;
 var FormHandler = App.FormHandler;
 var CheckList = App.CheckList;
 var mymovie = new portal('701', new DataStore());
 window.mymovie = mymovie;
 var checkList = new CheckList(CHECKLIST_SELECTOR);
 checkList.addClickHandler(mymovie.getinvoice.bind(mymovie));
 var formHandler = new FormHandler(FORM_SELECTOR);

 formHandler.addSubmitHandler(function (data) {
 console.log(formHandler);
 mymovie.createOrder.call(mymovie, data);
 checkList.addRow.call(checkList, data);
 });
})(window);
