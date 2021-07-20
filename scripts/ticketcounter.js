(function (window) {
 'use strict';
 var App = window.App || {};
 function portal(stateId, db) {
 this.stateId = stateId;
 this.db = db;
}
portal.prototype.createOrder = function (order) {
 console.log('Adding order for ' + order.emailAddress);
 this.db.add(order.emailAddress, order);
 };

 portal.prototype.getinvoice = function (clientId) {
  console.log('Presenting order for ' + clientId);
  this.db.remove(clientId);
  };

  portal.prototype.pending = function () {
  var clientIdArray = Object.keys(this.db.getAll());
  console.log('State code #' + this.stateId + ' has pending orders:');
  clientIdArray.forEach(function (id) {
  console.log(this.db.get(id));
  }.bind(this));
  };

 App.portal = portal;
 window.App = App;
})(window);
