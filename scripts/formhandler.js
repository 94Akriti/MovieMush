(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }
  FormHandler.prototype.addSubmitHandler = function(fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };
  FormHandler.prototype.addvalidHandler = function(fn){
    console.log('Setting input handler for the form');
    this.$formElement.on('input', '[name="movie"]', '[name="threads"]' function (event) {
      var movie = event.target.value;
      var threads = event.target.value;
      var message='';
      if(fn(movie,threads)){
        event.target.setCustomValidity('');
      }else{
        message = movie + threads + ' is not available'
        event.target.setCustomValidity(message);
      }
    });
  };
FormHandler.prototype.addInputHandler = function(fn){
  console.log('Setting input handler for the form');
  this.$formElement.on('input', '[name="emailAddress"]', function (event) {
    var emailAddress = event.target.value;
    var message='';
    if(fn(emailAddress)){
      event.target.setCustomValidity('');
    }else{
      message = emailAddress + ' is not a Prime member email address!'
      event.target.setCustomValidity(message);
    }
  });
};

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
